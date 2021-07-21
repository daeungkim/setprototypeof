"use strict";
/* eslint no-proto: 0 */
module.exports =
  Object.setPrototypeOf ||
  ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * Object.setPrototypeOf가 (null || undefined)등이 아닌경우 Object.setPrototypeOf를 사용한다.
 * Object.setPrototypeOf가 (null || undefined)인 경우 __proto__프로퍼티가 개체의 프로토타입을 변경할수 있는지 여부를 통하여 결정한다.
 */

/**
 * { __proto__: [] } 의 프로토타입
 * 1. 개체 리터럴로 선언하였으므로 프로토타입은 Object이다.
 * 2. __proto__프로퍼티를 배열 리터럴로 선언하였으므로 __proto__는 배열이다.
 * 3. 만약 __proto__의 값 변경을 통해 프로토타입을 변경할 수 있다면, { __proto__: [] }의 프로토타입은 배열이 될것이다.
 * 4. 만약 __proto__의 값을 변경하더라도 프로토타입을 변경할 수 없다면, { __proto__: [] }의 프로토타입은 개체가 될것이다.
 */

/**
 * __proto__프로퍼티 변경을 통한 프로토타입 변경 가능여부를 확인해야하는 이유
 *
 * 1. __proto__는 es6이전에 표준이 아니었다.
 * 2. es6를 통한 __proto__프로퍼티의 표준화 작업을 통해, __proto__프로퍼티를 통한 프로토타입 변경을 할 수 없게되었다.
 *
 * https://2ality.com/2015/09/proto-es6.html 참고
 * https://levelup.gitconnected.com/the-mysterious-javascript-objects-proto-property-67b7c6b3140c 참고
 */

/**
 * __proto__를 통하여 프로토타입 자체를 변경한다.
 */
function setProtoOf(obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

/**
 * __proto__를 통한 프로토타입 변경이 힘든경우
 * proto의 프로퍼티중 obj에 없는 프로퍼티만 복사한다.
 */
function mixinProperties(obj, proto) {
  for (var prop in proto) {
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      obj[prop] = proto[prop];
    }
  }
  return obj;
}
