# Autodistribution Script for Google Sheets

## Overview

The `autodistribution` script is designed to create a new distribution of users based on data from Google Sheets. It analyzes the current user data and settings to create teams based on specified criteria, minimizing repeated participants.

**Template Link**: [Google Sheets Template](https://docs.google.com/spreadsheets/d/1uxIdh18yyhVnPmdPzGmp22RC3S6bGZAuow6unQyV9Ik/edit?usp=sharing)

## Features

- **Automatic Team Formation**: Creates teams based on user data and specified criteria.
- **Criteria-Based Distribution**: Distributes users considering various properties and points to ensure balanced teams.
- **Minimizing Repetitions**: Ensures the same users do not frequently end up in the same teams.

## Requirements

- Authorization in a Google account to use Google Sheets.

## Installation

1. **Copy the Google Sheets Template**: Open the template, select `File` -> `Make a copy` -> `Copy`.

   ![image](https://github.com/baranovlad/autodistribution/assets/167073391/2b6c688f-5ef7-40d5-8c0f-7f01bce648ff)

2. **Set Up the Macro**: Choose `Extensions` -> `Macros` -> `CreateTrigger` from the menu.

   ![image](https://github.com/baranovlad/autodistribution/assets/167073391/a16daf04-2b15-4b42-8bae-92e043690973)
   
3. **Authorize the Script**: An authorization window for the script will open. Grant access to use it.

   ![image_2024-05-21_18-20-15](https://github.com/baranovlad/autodistribution/assets/167073391/fb891e1b-bcc4-462a-9554-8902f4f272ff)   
   
4. **Grant Permissions**: Allow the script to modify the file for its execution.

   ![image](https://github.com/baranovlad/autodistribution/assets/167073391/337f8fe3-cfaf-436e-bc63-1aed85e7ea0c)

Now you can use this file to create your own distributions.

## Screenshots

### Google Sheets Data
The script uses data structured in the following format in Google Sheets:

#### Settings Sheet
![image](https://github.com/baranovlad/autodistribution/assets/167073391/f809ade7-0467-4d46-916a-923b250c1175)

#### Users Sheet
![image](https://github.com/baranovlad/autodistribution/assets/167073391/426b95e8-3c1e-4582-8788-812237beb712)

## First Run

1. **Specify Users**: Fill the `users` sheet with users and specify their properties.
2. **Set Up Distribution**: Choose the number of people per team and the points assigned for each property on the `settings` sheet.
3. **Create Distribution**: Create a new sheet in your table.
4. **Check Results**: The script will update the Google Sheets document with new team distributions.

## Support

For any questions or issues, please contact the developer at djwoo.reg@gmail.com
