---
layout: post
title: PHP Type Casting&#58; Arrays, Objects and JSON
excerpt:
    I needed a very simple API to transfer some data to another project. The easiest way is to encode the data on one side to JSON en decode it on the other side. Things didn't go as expected...
---
I needed a very simple API to transfer some data to another project. The easiest way is to encode the data to JSON on one side and decode it on the other side. Things didn't go as expected...

Let's start with the data that needs to be transfered

```php
<?php
$data = array(
    '233' => array(
        'foo' => 'bar'
    )
);
```

Decoding this array with JSON returns this string:

```json
{"233":{"foo":"bar"}}
```

Pretty straight forward. Now it's time de docode the string.

```php
<?php
object(stdClass)[1]
  public '233' =>
    object(stdClass)[2]
      public 'foo' => string 'bar' (length=3)
```

By default [json_decode](http://php.net/manual/en/function.json-decode.php) will return objects. If we would set the second paramter to <code class="prettyprint">TRUE</code> all objects will be converted to an associative array. But what would happen if we just convert the object to an array without using that second paramter?

```php
<?php
$data = (array) $data;
```

As we would expect the first object is now an array:

```php
<?php
array (size=1)
  '233' =>
    object(stdClass)[2]
      public 'foo' => string 'bar' (length=3)
```

All the previous is exactly what we would expect. Things didn't go as expected when we tried to access the data in this array....

```php
<?php
$decodedData['233'] // Notice: Undefined index: 233...
```

What!? The <code class="prettyprint">var_dump</code> showed us the key but we can't access it? Let's try to verify this:

```php
<?php
array_key_exists('233', $arrayData); // false
in_array('233', array_keys($arrayData)); // true
```

So, the key doesn't exists but when I retrieve the keys from the array we do find the key.

And that's where my knowledge ends, i have no idea why this happens. I did find some *explanations*:

First of all, we should use [json_decode](http://php.net/manual/en/function.json-decode.php)'s second parameter to convert all object to arrays.

Then there's the key we use: 233. The string is decoded to an object and numbers aren't allowed to be a number. Maybe that's the reason why this happens?

On the other hand when we use [get_object_vars](http://php.net/manual/en/function.get-object-vars.php) we do get an array where we can access the key '233':

```php
<?php
$objectvarsData = get_object_vars($decodedData);
var_dump($objectvarsData);
/*
    array (size=1)
      233 =>
        object(stdClass)[2]
          public 'foo' => string 'bar' (length=3)
*/
var_dump(array_key_exists('233', $objectvarsData)); // true
var_dump(in_array('233', array_keys($objectvarsData))); // true
```

If [get_object_vars](http://php.net/manual/en/function.get-object-vars.php) is able to correctly convert the object to an array why can't we type cast the object to an array?

I have no idea, do you? Feel free to add your explanation/guess in the comments!

**UPDATE**

On twitter [@andriesss](http://twitter.com/andriesss) pointed me to 2 bug-reports on the PHP-website: [#45959](https://bugs.php.net/bug.php?id=45959) and [#52677](https://bugs.php.net/bug.php?id=52677). These reports actually explain the situation. The bug wasn't fixed because It would decrease performance, but they updated the documentation on [Arrays](http://php.net/array#language.types.array.casting).
