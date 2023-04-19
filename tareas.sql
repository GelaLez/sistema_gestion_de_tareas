
-- -----------------------------------------------------
-- Table usuarios
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `token` VARCHAR(45) NULL,
  `activo` VARCHAR(45) NULL,
  PRIMARY KEY (`idusuarios`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`idusuarios` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table tareas
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tareas` (
  `idtareas` INT NOT NULL AUTO_INCREMENT,
  `usuarios_idusuarios` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `estatus_de_complecion` VARCHAR(45) NULL,
  `fecha_de_entrega` VARCHAR(45) NULL,
  `comentarios` VARCHAR(45) NULL,
  `responsable` VARCHAR(45) NULL,
  `tags` VARCHAR(45) NULL,
  PRIMARY KEY (`idtareas`),
  UNIQUE INDEX `idtareas_UNIQUE` (`idtareas` ASC) VISIBLE,
  INDEX `fk_tareas_usuarios_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_tareas_usuarios`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
