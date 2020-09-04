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

const { Command, flags } = require('@oclif/command')
const fs = require('fs')
const os = require('os')
const http = require('http')
const inquirer = require('inquirer')
const needle = require('needle')
const utils = require('../helpers/utils')
const { parseAsync, Parser } = require('json2csv')

class QueryCommand extends Command {
    async run() {
        let query = null;
        let { hostname, username, password, csvPath } = await utils.getEnvironmentInfo();
        var questions = [{
            type: 'input',
            name: 'query',
            message: "Enter your query",
        }];
        await inquirer.prompt(questions).then(answers => {
            query = answers['query']
        });


        const processQuery = new Promise((resolve, reject) => {
            needle.get(hostname + '/bin/querybuilder.json?' + query, {
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
                }
            }, (err, res) => {
                if (err) {
                    return reject(err)
                }
                console.log(res.statusCode)
                return resolve(res.body)
            })
        })

        const getResults = async() => {
            const results = await processQuery
            return results
        }

        getResults().then(result => {
            const parser = new Parser({})
            const csv = parser.parse(result['hits'])
            fs.writeFile(csvPath, csv, function(err) {
                if (err) {
                    return console.log(err)
                }
                console.log("Results have been saved at ", csvPath)
            })
        }).catch(error => {
            console.log(error)
        })

    }
}

QueryCommand.description = `Execute Search Query on an AEM repository`

module.exports = QueryCommand