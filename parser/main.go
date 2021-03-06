/*
 *   Copyright (c) 2021 Anton Brekhov
 *   All rights reserved.
 */

package main

import (
	"github.com/NmadeleiDev/ros_atom_case/parser/pkg/service"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		logrus.Error(err)
	}

	// logrus.SetLevel(logrus.DebugLevel)
	logrus.SetLevel(logrus.InfoLevel)
	logrus.Info("Parser started...")

	gs := service.New()
	gs.Run()
}
