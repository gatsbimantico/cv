/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

function transformStrToBin(input) {

  var i,
    length8 = input.length * 8,
    output = new Array((input.length >> 2) - 1).fill(0);

  for (i = 0; i < length8; i += 8) {

    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);

  }

  return [output, length8];

}

function transformBinToBinMD5([x, len]) {

  var i,
    a___,
    ___b,
    __c_,
    _d__,
    o___ = 1732584193,
    _o__ = 271733878,
    __o_ = -1732584194,
    ___o = -271733879,
    md5ff = (a, b, c, d, x, s, t) => md5cmn((b & c) | (~b & d), a, b, x, s, t),
    md5gg = (a, b, c, d, x, s, t) => md5cmn((b & d) | (c & ~d), a, b, x, s, t),
    md5hh = (a, b, c, d, x, s, t) => md5cmn(b ^ c ^ d, a, b, x, s, t),
    md5ii = (a, b, c, d, x, s, t) => md5cmn(c ^ (b | ~d), a, b, x, s, t),
    bitRotateLeft = (num, cnt) => (num << cnt) | (num >>> (32 - cnt));

  function safeAdd(x, y) {

    var lsw = (x & 0xffff) + (y & 0xffff),
      msw = (x >> 16) + (y >> 16) + (lsw >> 16);

    return (msw << 16) | (lsw & 0xffff);

  }

  function md5cmn(q, a, b, x, s, t) {

    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);

  }

  x[len >> 5] |= 0x80 << (len % 32);
  x[((len + 64) >>> 9 << 4) + 14] = len;

  for (i = 0; i < x.length; i += 16) {

    let
      x00 = x[i + 0],
      x01 = x[i + 1],
      x02 = x[i + 2],
      x03 = x[i + 3],
      x04 = x[i + 4],
      x05 = x[i + 5],
      x06 = x[i + 6],
      x07 = x[i + 7],
      x08 = x[i + 8],
      x09 = x[i + 9],
      x10 = x[i + 10],
      x11 = x[i + 11],
      x12 = x[i + 12],
      x13 = x[i + 13],
      x14 = x[i + 14],
      x15 = x[i + 15];

    a___ = o___;
    ___b = ___o;
    __c_ = __o_;
    _d__ = _o__;
    o___ = md5ff(o___, ___o, __o_, _o__, x00, 7, -680876936);
    _o__ = md5ff(_o__, o___, ___o, __o_, x01, 12, -389564586);
    __o_ = md5ff(__o_, _o__, o___, ___o, x02, 17, 606105819);
    ___o = md5ff(___o, __o_, _o__, o___, x03, 22, -1044525330);
    o___ = md5ff(o___, ___o, __o_, _o__, x04, 7, -176418897);
    _o__ = md5ff(_o__, o___, ___o, __o_, x05, 12, 1200080426);
    __o_ = md5ff(__o_, _o__, o___, ___o, x06, 17, -1473231341);
    ___o = md5ff(___o, __o_, _o__, o___, x07, 22, -45705983);
    o___ = md5ff(o___, ___o, __o_, _o__, x08, 7, 1770035416);
    _o__ = md5ff(_o__, o___, ___o, __o_, x09, 12, -1958414417);
    __o_ = md5ff(__o_, _o__, o___, ___o, x10, 17, -42063);
    ___o = md5ff(___o, __o_, _o__, o___, x11, 22, -1990404162);
    o___ = md5ff(o___, ___o, __o_, _o__, x12, 7, 1804603682);
    _o__ = md5ff(_o__, o___, ___o, __o_, x13, 12, -40341101);
    __o_ = md5ff(__o_, _o__, o___, ___o, x14, 17, -1502002290);
    ___o = md5ff(___o, __o_, _o__, o___, x15, 22, 1236535329);
    o___ = md5gg(o___, ___o, __o_, _o__, x01, 5, -165796510);
    _o__ = md5gg(_o__, o___, ___o, __o_, x06, 9, -1069501632);
    __o_ = md5gg(__o_, _o__, o___, ___o, x11, 14, 643717713);
    ___o = md5gg(___o, __o_, _o__, o___, x00, 20, -373897302);
    o___ = md5gg(o___, ___o, __o_, _o__, x05, 5, -701558691);
    _o__ = md5gg(_o__, o___, ___o, __o_, x10, 9, 38016083);
    __o_ = md5gg(__o_, _o__, o___, ___o, x15, 14, -660478335);
    ___o = md5gg(___o, __o_, _o__, o___, x04, 20, -405537848);
    o___ = md5gg(o___, ___o, __o_, _o__, x09, 5, 568446438);
    _o__ = md5gg(_o__, o___, ___o, __o_, x14, 9, -1019803690);
    __o_ = md5gg(__o_, _o__, o___, ___o, x03, 14, -187363961);
    ___o = md5gg(___o, __o_, _o__, o___, x08, 20, 1163531501);
    o___ = md5gg(o___, ___o, __o_, _o__, x13, 5, -1444681467);
    _o__ = md5gg(_o__, o___, ___o, __o_, x02, 9, -51403784);
    __o_ = md5gg(__o_, _o__, o___, ___o, x07, 14, 1735328473);
    ___o = md5gg(___o, __o_, _o__, o___, x12, 20, -1926607734);
    o___ = md5hh(o___, ___o, __o_, _o__, x05, 4, -378558);
    _o__ = md5hh(_o__, o___, ___o, __o_, x08, 11, -2022574463);
    __o_ = md5hh(__o_, _o__, o___, ___o, x11, 16, 1839030562);
    ___o = md5hh(___o, __o_, _o__, o___, x14, 23, -35309556);
    o___ = md5hh(o___, ___o, __o_, _o__, x01, 4, -1530992060);
    _o__ = md5hh(_o__, o___, ___o, __o_, x04, 11, 1272893353);
    __o_ = md5hh(__o_, _o__, o___, ___o, x07, 16, -155497632);
    ___o = md5hh(___o, __o_, _o__, o___, x10, 23, -1094730640);
    o___ = md5hh(o___, ___o, __o_, _o__, x13, 4, 681279174);
    _o__ = md5hh(_o__, o___, ___o, __o_, x00, 11, -358537222);
    __o_ = md5hh(__o_, _o__, o___, ___o, x03, 16, -722521979);
    ___o = md5hh(___o, __o_, _o__, o___, x06, 23, 76029189);
    o___ = md5hh(o___, ___o, __o_, _o__, x09, 4, -640364487);
    _o__ = md5hh(_o__, o___, ___o, __o_, x12, 11, -421815835);
    __o_ = md5hh(__o_, _o__, o___, ___o, x15, 16, 530742520);
    ___o = md5hh(___o, __o_, _o__, o___, x02, 23, -995338651);
    o___ = md5ii(o___, ___o, __o_, _o__, x00, 6, -198630844);
    _o__ = md5ii(_o__, o___, ___o, __o_, x07, 10, 1126891415);
    __o_ = md5ii(__o_, _o__, o___, ___o, x14, 15, -1416354905);
    ___o = md5ii(___o, __o_, _o__, o___, x05, 21, -57434055);
    o___ = md5ii(o___, ___o, __o_, _o__, x12, 6, 1700485571);
    _o__ = md5ii(_o__, o___, ___o, __o_, x03, 10, -1894986606);
    __o_ = md5ii(__o_, _o__, o___, ___o, x10, 15, -1051523);
    ___o = md5ii(___o, __o_, _o__, o___, x01, 21, -2054922799);
    o___ = md5ii(o___, ___o, __o_, _o__, x08, 6, 1873313359);
    _o__ = md5ii(_o__, o___, ___o, __o_, x15, 10, -30611744);
    __o_ = md5ii(__o_, _o__, o___, ___o, x06, 15, -1560198380);
    ___o = md5ii(___o, __o_, _o__, o___, x13, 21, 1309151649);
    o___ = md5ii(o___, ___o, __o_, _o__, x04, 6, -145523070);
    _o__ = md5ii(_o__, o___, ___o, __o_, x11, 10, -1120210379);
    __o_ = md5ii(__o_, _o__, o___, ___o, x02, 15, 718787259);
    ___o = md5ii(___o, __o_, _o__, o___, x09, 21, -343485551);
    o___ = safeAdd(o___, a___);
    _o__ = safeAdd(_o__, _d__);
    __o_ = safeAdd(__o_, __c_);
    ___o = safeAdd(___o, ___b);

  }

  return [o___, ___o, __o_, _o__];

}

function transformBinToHex(binl) {

  var i, x,
    length32 = binl.length * 32,
    hexTab = '0123456789abcdef',
    hex = '';

  for (i = 0; i < length32; i += 8) {

    x = (binl[i >> 5] >>> (i % 32)) & 0xff;
    hex += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);

  }

  return hex

}

export default function md5(s) {

  return transformBinToHex(
    transformBinToBinMD5(
      transformStrToBin(
        unescape(
          encodeURIComponent(s)
        )
      )
    )
  );

}
