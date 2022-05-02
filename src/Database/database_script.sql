-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `enrollment_date` DATE NULL,
  `premium_status` TINYINT NULL,
  `hash` VARCHAR(45) NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB
AUTO_INCREMENT = 0
COMMENT = '\n';


-- -----------------------------------------------------
-- Table `mydb`.`Holdings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Holdings` (
  `idHoldings` INT NOT NULL,
  `idUser` INT NULL,
  `symbol` VARCHAR(5) NULL,
  `buy_price` REAL NULL,
  `target_price` REAL NULL,
  `trans_date` DATETIME NULL,
  PRIMARY KEY (`idHoldings`),
  UNIQUE INDEX `idHoldings_UNIQUE` (`idHoldings` ASC) VISIBLE,
  INDEX `idUser_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Crypto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Crypto` (
  `symbol` VARCHAR(5) NOT NULL,
  `price` REAL NULL,
  PRIMARY KEY (`symbol`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
