---
layout: post
title: Automating the testing your website
excerpt:
    "Every adjustment to a website brings risks with it. How can you be certain that you won’t break something else? Complexity will lead to a greater risk. Are you going to test each feature before every launch? Find out what you can do to have a smooth launch."
---
*This post originaly was posted on the Inventis blog in dutch ([Je website automatisch testen](http://www.inventis.be/blog/webdevelopment/je-website-automatisch-testen/453/)).*

In a perfect scenario you are going to test each feature before every launch. But let’s be honest: test your entire website is, in most scenario’s, impossible. Clicking aimlessly trough the website, filling out some forms and placing a dummy order. Which is probably something that you’ve done a dozen times and worked on every occasion. But that one time you skip this you will meet Murphy. Something is wrong in the cart and nobody is able to place an order.

So. how can we prevent this?

## What you should be testing
The first thing you should do is take a look at the goal of your website. Are you generating leads with a contact form? Then you must be sure that it keeps working. Do you have an online store? Make sure you’re able to place an order at any given time.

Search for the most important task of your website:

- Getting in touch (trough a contact form)
- Selling products (ordering process)
- Generating leads (through a newsletter subscription)

Want to go a step further? [Read more about creating a scope document to map each feature of your website. (dutch)](http://www.inventis.be/blog/project-management/wat-zijn-de-meerwaarden-van-een-scope-document-in-web-development/450/)

## Can we automate that?
Yes, you can automate that.

### 1. Use Gherkin to declare the features
Gherkin is a simple declarative language that everyone can understand.

“Gherkin is a Business Readable, Domain Specific Language that lets you describe software’s behaviour without detailing how that behaviour is implemented.”

Behind the scenes the developer can add code in his preferred programming language to add functionality to the features described in Gherkin. It’s mostly used in English but is available in more then 30 different languages.

Let’s take a look how we can describe filling out the contact form:

&nbsp;&nbsp;&nbsp;&nbsp;**Given** there is a link ‘Contact us’ on the homepage<br />
&nbsp;&nbsp;&nbsp;&nbsp;**When** I go to the page ‘Contact us’<br />
&nbsp;&nbsp;&nbsp;&nbsp;**And** I fill out the contact form<br />
&nbsp;&nbsp;&nbsp;&nbsp;**Then** I see a success page

Based on this description it’s clear for everyone what can be expected. The client know what he’s going to receive and we know what we need to build.

### 2. Write test based on the declared features
Every line in the description can be provided with the necessary logic.

To do that we’ll be using Behat and Mink. Behat is a tool that can interpret the Gherkin language. Mink is being used to provide a browser in the background.

Let’s take a look at this line:

&nbsp;&nbsp;&nbsp;&nbsp;**And** I fill out the contact form<br />

The developer can write the following code:

![](/assets/images/posts/automate-the-testing-of-your-website/code.png)

This code will look for the form on the page (line 9), fill it out (lines 11 trough 14) and send it (line 16).

### 3. Run the tests after each adjustment
After we run this test we get the following result:
![](/assets/images/posts/automate-the-testing-of-your-website/test-result.png)

We can see that the test succeeded and we know for sure the contact form is working. You can always extend this test to check if the entry is logged in the database and an email has been sent to the right person.

## Are you 100% sure?
You can never be. Webdevelopment is complex en complex stuff is sensitive for erros. But with automating the test and running them after each adjustment you know for sure you won’t be missing any conversions.
