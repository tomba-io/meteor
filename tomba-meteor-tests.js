import { Tinytest } from "meteor/tinytest";
import { name as packageName, Tomba as tomba } from "meteor/tombaio:tomba-meteor";

Tinytest.add('tomba-meteor - example', function (test) {
  test.equal(packageName, "tomba-meteor");
});

Tinytest.add("tomba-node is available", (test) => {
  test.isTrue(tomba != null);
});
