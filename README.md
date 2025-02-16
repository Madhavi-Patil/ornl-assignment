# ORNL Assignment

Welcome to the ORNL Assignment Workspace! This repository contains JavaScript functions and their corresponding unit tests.

## Table of Contents

- [Installation](#installation)
- [Testing](#testing)
- [AdditionalInfo](#additionalinfo)

## Installation

To get started, clone the repository and install the necessary dependencies.

```bash
# Clone the repository
git clone https://github.com/Madhavi-Patil/ornl-assignment.git

# Navigate to the project directory
cd ornl-assignment

# Install dependencies
npm install
```

## Testing

Jest is used for local testing. To run the tests, use the following command:

```bash
# Run tests
npm test
```

Make sure to write tests for any new functionality you add to the project.

## AdditionalInfo

Question # C: Currently this code runs via unit tests. How might we run an operation like this in production, at scale?
Answer: It could be move executed as a part of 'Step function' where multiple tasks could be created, executed and at the end Results would be combined.
