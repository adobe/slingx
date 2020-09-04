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
const utils = require('../helpers/utils')
const request = require('request')
const csvParser = require('csv-parser')

class ImportCommand extends Command {
    async run() {
        //let { hostname, username, password, csvPath } = await utils.getEnvironmentInfo()
        this.processCSV('https://author452.adobedemo.com', 'admin', 'FNwapID4', '/Users/namigupt/Downloads/dummy3.csv')
    }

    async processCSV(hostname, username, password, csvPath) {
        const authHeaderValue = 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
        fs.createReadStream(csvPath)
            .pipe(csvParser())
            .on('data', (row) => {
                console.log(row)
                console.log(row['path'])
                request({
                    url: hostname + '/api/assets' + '/ite/' + row['assetName'],
                    method: 'POST',
                    headers: {
                        'cache-control': 'no-cache',
                        'authorization': authHeaderValue
                    },
                    formData: {
                        file: fs.createReadStream(row['path']),
                        '*@TypeHint': 'dam:Asset',
                        name: row['assetName']
                    }

                }, (error, response) => {
                    if (error) {
                        console.error(error)
                    }

                    console.log(response.statusCode)
                })
            })
            .on('end', () => {
                console.log('CSV file successfully processed')
            })
    }
}

ImportCommand.description = `Import Asset(s) with metadata`

module.exports = ImportCommand