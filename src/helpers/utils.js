/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require('fs')
const os = require('os')
const http = require('http')
const inquirer = require('inquirer')
const csvParser = require('csv-parser')
const needle = require('needle')

module.exports = {
    getEnvironmentInfo: async function() {
        let hostname = null;
        let username = null;
        let password = null;
        let csvPath = null;
        var questions = [{
            type: 'input',
            name: 'hostname',
            message: "What is your hostname?",
        }, {
            type: 'input',
            name: 'username',
            message: "What is your username?",
        }, {
            type: 'password',
            name: 'password',
            message: "What is your password?",
        }, {
            type: 'input',
            name: 'csvPath',
            message: "What is your CSV Path?",
        }];
        await inquirer.prompt(questions).then(answers => {
            password = answers['password'];
            username = answers['username'];
            hostname = answers['hostname'];
            csvPath = answers['csvPath'];
        });
        return { hostname, username, password, csvPath };
    }
}