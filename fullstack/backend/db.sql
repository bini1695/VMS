CREATE DATABASE IF NOT EXISTS vet_pims;
USE vet_pims;

-- ========================================================
-- 1. SECURITY & ROLE MANAGEMENT TABLES
-- ========================================================

-- Roles Table (Admin, Vet, Receptionist, Lab Tech, Pharmacist, Client)
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Populate predefined system roles
INSERT INTO roles (role_name) VALUES 
('Admin'), 
('Veterinarian'), 
('Receptionist'), 
('Lab Technician'), 
('Pharmacist'), 
('Client');

-- Users Table (Handles system staff and client portal users)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20) DEFAULT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
) ENGINE=InnoDB;


-- ========================================================
-- 2. CLINICAL & BILLING SETUP TABLES
-- ========================================================

-- Service Catalog (Consultations, Lab Tests, Surgeries, Vaccines)
CREATE TABLE service_catalog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    category ENUM('Consultation', 'Laboratory', 'Procedure', 'Vaccine', 'Other') NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    taxable TINYINT(1) DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Inventory Items (Managed by Pharmacist / Inventory Manager)
CREATE TABLE inventory_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    stock_quantity INT NOT NULL DEFAULT 0,
    reorder_level INT NOT NULL DEFAULT 10,
    expiration_date DATE DEFAULT NULL,
    is_active TINYINT(1) DEFAULT 1,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;


-- ========================================================
-- 3. INVOICE & ITEMIZATION TABLES
-- ========================================================

-- Invoices Table (Central Financial Record)
CREATE TABLE invoices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    invoice_number VARCHAR(50) NOT NULL UNIQUE,
    client_id INT NOT NULL,
    created_by_user_id INT NOT NULL,
    approved_by_user_id INT DEFAULT NULL COMMENT 'Vet/Admin user ID who approved price override or discount',
    subtotal DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    discount_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    tax_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status ENUM('Draft', 'Pending', 'Partially_Paid', 'Paid', 'Refunded', 'Void') NOT NULL DEFAULT 'Draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE RESTRICT,
    FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE RESTRICT,
    FOREIGN KEY (approved_by_user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Invoice Line Items (Items added by Vets, Lab Techs, or Pharmacists)
CREATE TABLE invoice_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    invoice_id INT NOT NULL,
    item_type ENUM('Service', 'Medication', 'Lab_Test') NOT NULL,
    item_id INT NOT NULL COMMENT 'FK to service_catalog.id or inventory_items.id',
    description VARCHAR(255) DEFAULT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    line_total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE CASCADE
) ENGINE=InnoDB;


-- ========================================================
-- 4. PAYMENT EXECUTION & AUDIT TABLES
-- ========================================================

-- Payments Table (Transactions processed by Receptionist or via Client Portal)
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    invoice_id INT NOT NULL,
    processed_by_user_id INT NOT NULL COMMENT 'Receptionist staff ID or Client ID if paid via portal',
    payment_method ENUM('Cash', 'Card', 'Digital_Wallet', 'Card_On_File', 'Text_To_Pay') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_reference VARCHAR(100) DEFAULT NULL COMMENT 'Gateway Ref ID, Auth Code, or Terminal TX ID',
    payment_status ENUM('Completed', 'Failed', 'Pending', 'Refunded') NOT NULL DEFAULT 'Completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE RESTRICT,
    FOREIGN KEY (processed_by_user_id) REFERENCES users(id) ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Tokenized Cards on File (PCI-Compliant Token Storage)
CREATE TABLE client_cards_on_file (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    gateway_token VARCHAR(255) NOT NULL COMMENT 'Token provided by Stripe, Square, etc.',
    card_brand VARCHAR(50) NOT NULL COMMENT 'e.g., Visa, Mastercard',
    last4_digits VARCHAR(4) NOT NULL,
    exp_month INT NOT NULL,
    exp_year INT NOT NULL,
    is_default TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Financial Audit Logs (For System Admin oversight and compliance)
CREATE TABLE financial_audit_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    action ENUM('PRICE_OVERRIDE', 'APPLY_DISCOUNT', 'ISSUE_REFUND', 'VOID_INVOICE') NOT NULL,
    invoice_id INT DEFAULT NULL,
    details JSON DEFAULT NULL COMMENT 'Stores reason, old value, new value',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Indexes for performance
CREATE INDEX idx_invoices_client ON invoices(client_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_payments_invoice ON payments(invoice_id);
CREATE INDEX idx_audit_logs_user ON financial_audit_logs(user_id);