# Het Archief voor Onderwijs - react components

## Synopsis

This repository contains the AVO React components to be consumed by the end user and admin applications.

## Technical

|Role              | Handle / username|
| -------------    |--------------|
|Principal/Owner   | Bart Debunne <bart.debunne@viaa.be>  |
|Lead Developer    | Enzo Eghermanne <enzo.eghermanne@studiohyperdrive.be> |
|Lead Developer    | Bert Verhelst <bert.verhelst@studiohyperdrive.be> |
|Developer         | Benjamin Naesen <benjamin.naesen@studiohyperdrive.be> |

**Code Review:**

## Functional

The avo components app will provide the following:
* Re-usable React components, published on registry under @viaa/components

## Stack

React w/ Storybook

## Deploy

* Update `package.json` version to match release branch version.
* Merge the desired `release/vX.X.X` branch into the `master` branch.
* Add the current version as a tag BEFORE pushing said merge. (Format: `vX.X.X`)
* You can follow the deploy & release in the GitHub repo.
* When release, you can use the new release in other repositories.
    * Package installation will fail if you're not connected with the meemoo VPN.
    * AvO 2 packages can be found under the `@viaa` npm namespace.

## Usage

`docker-compose up`
