const _0x36237e = _0x1db5;
(function(_0x2999ea, _0x51886a) {
    const _0x52309a = _0x1db5
      , _0x27ecd6 = _0x2999ea();
    while (!![]) {
        try {
            const _0x42af25 = -parseInt(_0x52309a(0x1b4)) / 0x1 * (parseInt(_0x52309a(0x199)) / 0x2) + -parseInt(_0x52309a(0x181)) / 0x3 + parseInt(_0x52309a(0x1ab)) / 0x4 + parseInt(_0x52309a(0x183)) / 0x5 * (parseInt(_0x52309a(0x1b6)) / 0x6) + -parseInt(_0x52309a(0x1b1)) / 0x7 * (-parseInt(_0x52309a(0x1ad)) / 0x8) + -parseInt(_0x52309a(0x19d)) / 0x9 * (parseInt(_0x52309a(0x17d)) / 0xa) + parseInt(_0x52309a(0x187)) / 0xb;
            if (_0x42af25 === _0x51886a)
                break;
            else
                _0x27ecd6['push'](_0x27ecd6['shift']());
        } catch (_0x56b52d) {
            _0x27ecd6['push'](_0x27ecd6['shift']());
        }
    }
}(_0x309e, 0xcef4f),
$(document)['ready'](function() {
    const _0x4e9326 = _0x1db5;
    $('[data-toggle=\x22tooltip\x22]')[_0x4e9326(0x1a0)](),
    $('#query-form')[_0x4e9326(0x1bb)](function(_0x315774) {
        submitRequest(_0x315774);
    });
}),
$(_0x36237e(0x193))[_0x36237e(0x18d)](function() {
    const _0x207ca4 = _0x36237e
      , _0x302615 = $[_0x207ca4(0x1b2)]($(_0x207ca4(0x193))[_0x207ca4(0x1bd)]())
      , _0x36fdb6 = _0x302615[_0x207ca4(0x1a7)]
      , _0x377b92 = _0x302615[_0x207ca4(0x18c)];
    if (_0x36fdb6 > 0x5a || _0x36fdb6 < -0x5a || _0x377b92 > 0xb4 || _0x377b92 < -0xb4) {
        setDataErrorMessages();
        return;
    }
    submitRequest(_0x36fdb6, _0x377b92);
}));
let weatherTypeTranslation = {
    'pcloudy': _0x36237e(0x198),
    'mcloudy': _0x36237e(0x1ba),
    'lightrain': _0x36237e(0x1a8),
    'oshower': 'occasional\x20shower',
    'ishower': _0x36237e(0x186),
    'lightsnow': 'light\x20snow',
    'rainsnow': _0x36237e(0x1b7),
    'tstorm': _0x36237e(0x196),
    'tsrain': _0x36237e(0x17c)
};
function formatDate(_0xe46a0d) {
    const _0x12ba5d = _0x36237e;
    let _0x574512 = String(_0xe46a0d)
      , _0x57401a = _0x574512[_0x12ba5d(0x1be)](0x0, 0x4)
      , _0x181f62 = _0x574512[_0x12ba5d(0x1be)](0x4, 0x6)
      , _0x226e6d = _0x574512[_0x12ba5d(0x1be)](0x6, 0x8)
      , _0x4cdf03 = new Date(_0x57401a,_0x181f62 - 0x1,_0x226e6d);
    return _0x4cdf03[_0x12ba5d(0x1a5)]()[_0x12ba5d(0x1be)](0x0, 0xa);
}
function _0x1db5(_0x39bbae, _0x8f1255) {
    const _0x309ec1 = _0x309e();
    return _0x1db5 = function(_0x1db550, _0x525ad4) {
        _0x1db550 = _0x1db550 - 0x17b;
        let _0xceef77 = _0x309ec1[_0x1db550];
        return _0xceef77;
    }
    ,
    _0x1db5(_0x39bbae, _0x8f1255);
}
function formatResults(_0x53b3eb) {
    const _0x3f1ca3 = _0x36237e;
    var _0x19b7d3 = JSON[_0x3f1ca3(0x1ae)](_0x53b3eb)
      , _0x53a8dd = 0x0;
    console['log'](_0x53b3eb);
    if (_0x19b7d3[_0x3f1ca3(0x18e)]['length'] == 0x0)
        setNotFoundMessages();
    else {
        $(_0x3f1ca3(0x19c))[_0x3f1ca3(0x1b5)](''),
        $(_0x3f1ca3(0x1a9))[_0x3f1ca3(0x1b5)](_0x3f1ca3(0x19f));
        var _0x285cc1 = '';
        _0x285cc1 += _0x3f1ca3(0x1b0),
        _0x19b7d3[_0x3f1ca3(0x18e)][_0x3f1ca3(0x18f)](function(_0x499934, _0x7f18ac) {
            const _0x4b7f06 = _0x3f1ca3;
            _0x53a8dd++,
            _0x285cc1 += _0x4b7f06(0x19b),
            _0x285cc1 += '<p\x20class=\x27weather-date\x27>' + formatDate(_0x499934[_0x4b7f06(0x17b)]) + _0x4b7f06(0x18a),
            _0x285cc1 += _0x4b7f06(0x191) + _0x499934[_0x4b7f06(0x19a)] + _0x4b7f06(0x192) + _0x499934[_0x4b7f06(0x19a)] + _0x4b7f06(0x1a1),
            _0x285cc1 += _0x4b7f06(0x1b9);
            var _0x271984 = weatherTypeTranslation[_0x499934[_0x4b7f06(0x19a)]];
            _0x271984 == undefined && (_0x271984 = _0x499934['weather']);
            ;_0x285cc1 += _0x4b7f06(0x1bf) + _0x271984[_0x4b7f06(0x1af)]() + _0x4b7f06(0x18a),
            _0x285cc1 += _0x4b7f06(0x189) + _0x499934['temp2m'][_0x4b7f06(0x194)] + _0x4b7f06(0x188),
            _0x285cc1 += '<p\x20class=\x27weather-temperatures\x27>L:\x20' + _0x499934[_0x4b7f06(0x190)][_0x4b7f06(0x180)] + _0x4b7f06(0x188),
            _0x285cc1 += _0x4b7f06(0x1aa),
            _0x285cc1 += '</div></div>';
        }),
        _0x285cc1 += '</div>',
        _0x53a8dd > 0x0 ? ($(_0x3f1ca3(0x1a6))[_0x3f1ca3(0x1b3)](_0x285cc1),
        $(_0x3f1ca3(0x185))[_0x3f1ca3(0x1a0)]({
            'trigger': _0x3f1ca3(0x1b8),
            'delay': {
                'show': 0x3e8,
                'hide': 0x0
            }
        })) : setNotFoundMessages();
    }
}
function submitRequest(_0x2689e1, _0x211e65) {
    const _0x39281b = _0x36237e;
    var _0x13392c;
    _0x13392c && _0x13392c[_0x39281b(0x197)](),
    $(_0x39281b(0x19c))[_0x39281b(0x1b5)](_0x39281b(0x1ac)),
    $('#results')['text'](''),
    _0x13392c = $['ajax']({
        'url': _0x39281b(0x1a3),
        'type': _0x39281b(0x17f),
        'data': {
            'lon': _0x211e65,
            'lat': _0x2689e1,
            'product': _0x39281b(0x19e),
            'output': _0x39281b(0x182)
        }
    }),
    _0x13392c[_0x39281b(0x1a4)](function(_0x561dd6, _0x21b18d, _0x2414a1) {
        formatResults(_0x561dd6),
        toolTipReset();
    }),
    _0x13392c[_0x39281b(0x195)](function(_0x50b0bd, _0x2c1851, _0x5a0e89) {
        const _0x30cad1 = _0x39281b;
        $(_0x30cad1(0x1a9))[_0x30cad1(0x1b5)](_0x30cad1(0x18b)),
        $(_0x30cad1(0x1a6))['text']('');
    }),
    _0x13392c[_0x39281b(0x1bc)](function() {});
}
function _0x309e() {
    const _0x42d6d7 = ['#results', 'lat', 'light\x20rain', '#search-results-heading', '</div>', '1020132pSCGve', 'Getting\x20forecast\x20...', '7208SbtfAd', 'parse', 'toUpperCase', '<div\x20class=\x27forecast-block\x20row\x20row-cols-7\x20row-cols-md-7\x20row-cols-lg-7\x20g-4\x27>', '3689eXjLwT', 'parseJSON', 'html', '12318zNSdxc', 'text', '308010hYQSXr', 'freezing\x20rain', 'hover', '<div\x20class=\x27card-body\x27>', 'mostly\x20cloudy', 'submit', 'always', 'val', 'substring', '<p\x20class=\x27weather-description\x27>', 'date', 'thunderstorm', '10QrbYLn', 'Oops,\x20no\x20forecast\x20found,\x20please\x20change\x20city.', 'GET', 'min', '3130014GyhkkK', 'json', '25xioYus', 'hide', '[data-toggle=\x22tooltip\x22]', 'isolated\x20shower', '36523663xsrncc', '\x20ºC</p>', '<p\x20class=\x27weather-temperatures\x27>H:\x20', '</p>', 'An\x20error\x20occurred.\x20Please\x20try\x20again.', 'lon', 'change', 'dataseries', 'forEach', 'temp2m', '<div\x20class=\x27weather-icon-div\x27><img\x20class=\x27weather-icon\x27\x20src=\x27images/', '.png\x27\x20alt=\x27', '#citySelected', 'max', 'fail', 'thunderstorm\x20possible', 'abort', 'partly\x20cloudy', '254BOWCVu', 'weather', '<div\x20class=\x27col\x20bm-2\x27><div\x20class=\x27card\x20h-100\x27>', '#get-results-heading', '7663041znxeAO', 'civillight', '7\x20Day\x20Forecast', 'tooltip', '\x27></div>', 'Oops,\x20the\x20data\x20is\x20wrong\x20for\x20that\x20city.\x20Contact\x20the\x20webmaster.', 'https://www.7timer.info/bin/api.pl', 'done', 'toString'];
    _0x309e = function() {
        return _0x42d6d7;
    }
    ;
    return _0x309e();
}
function setDataErrorMessages() {
    const _0x4d9dea = _0x36237e;
    $('#get-results-heading')[_0x4d9dea(0x1b5)](_0x4d9dea(0x1a2)),
    $(_0x4d9dea(0x1a6))[_0x4d9dea(0x1b5)]('');
}
function setNotFoundMessages() {
    const _0x49db88 = _0x36237e;
    $(_0x49db88(0x19c))[_0x49db88(0x1b5)](_0x49db88(0x17e)),
    $(_0x49db88(0x1a6))[_0x49db88(0x1b5)]('');
}
function toolTipReset() {
    const _0x4c0e44 = _0x36237e;
    $('.tooltip')[_0x4c0e44(0x1a0)](_0x4c0e44(0x184));
}