# [<img src="https://tomba.io/logo.svg" alt="Tomba" width="25"/>](https://tomba.io/) Tomba Email Finder Meteor Client Library

This is the official Meteor client library for the [Tomba.io](https://tomba.io.io) Email Finder API,
allowing you to:

- [Domain Search.](https://tomba.io/domain-search) (Search emails are based on the website You give one domain name and it returns all the email addresses found on the internet.)
- [Email Finder](https://tomba.io/email-finder) (This API endpoint generates or retrieves the most likely email address from a domain name, a first name and a last name..)
- [Email Verifier.](https://tomba.io/email-verifier) (checks the deliverability of a given email address, verifies if it has been found in our database, and returns their sources.)
- [Email Enrich.](https://tomba.io/enrichment) (Enriches your email address with the most complete data available on the internet.)
- [Author Finder.](https://tomba.io/author-finder) (Find the author of any article or blog post with the most complete data available on the internet.)

## Getting Started

You'll need an Tomba API access token, which you can get by signing up for a free account at [https://app.tomba.io/auth/register](https://app.tomba.io/auth/register)

The free plan is limited to 25 search request and 50 verification a month, To enable all the data fields and additional request volumes see [https://tomba.io/pricing](https://tomba.io/pricing).

## Installation

To install via [Atmospherejs](https://atmospherejs.com/tombaio/tomba-meteor):

```bash
meteor add tombaio:tomba-meteor
```

## Usage

### Domain Search

get email addresses found on the internet.

```js
import { Tomba as tomba } from "meteor/tombaio:tomba-meteor";

// Init Tomba
let client = new tomba.Client();

let domain = new tomba.Domain(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
let result = domain.domainSearch("stripe.com");

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Email Finder

Find the verified email address of any professional.

```js
import { Tomba as tomba } from "meteor/tombaio:tomba-meteor";

// Init Tomba
let client = new tomba.Client();

let finder = new tomba.Finder(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
let result = finder.emailFinder("stripe.com", "fname", "lname");

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Email Verifier

Verify the validity of any professional email address with the most complete email checker.

```js
import { Tomba as tomba } from "meteor/tombaio:tomba-meteor";

// Init Tomba
let client = new tomba.Client();

let verifier = new tomba.Verifier(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
let result = verifier.emailVerifier("b.mohamed@tomba.io");

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Documentation

See the [official documentation](https://docs.tomba.io/introduction/).

### Other Libraries

There are official Tomba Email Finder client libraries available for many languages including PHP, Python, Go, Java, Ruby, and many popular frameworks such as Django, Rails and Laravel. There are also many third party libraries and integrations available for our API.

[https://docs.tomba.io/libraries](https://docs.tomba.io/libraries)

### About Tomba

Founded in 2020, Tomba prides itself on being the most reliable, accurate, and in-depth source of Email address data available anywhere. We process terabytes of data to produce our Email finder API, company.

[![image](https://avatars.githubusercontent.com/u/67979591?s=200&v=4)](https://tomba.io/)

## Contribution

1. Fork it (<https://github.com/tomba-io/meteor/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

Please see the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html) file for more information.
