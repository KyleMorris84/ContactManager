# Contacts Manager

[Live Site](https://kylemorris84.github.io/ContactManager/)

## Overview

Contacts Manager is a single page application designed to help users manage their personal and professional contacts efficiently. The application features

- An MS SQL Database that holds 125000 contacts. Hosted on Azure DB.
- A C# ASP.NET Core Api that uses EF Core to interface with the DB. Hosted using Azure App Services
- A React JS client powered by Vite that allows users to see and modify the records. Hosted on GitHub Pages.

## Features

- MS SQL Database seeded with 125000 records.
- Lightweight and scalable back-end that injects scoped services when needed.
- Straightforward REST API that implements pagination and sorting.
- Front-end that surfaces data. Users can make in-line amendments, sort by any column, page through results, and can push data back to the DB by saving.