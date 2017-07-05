var Translations = {
    M: 'Mission',
    T: 'Training',
    P: 'Playing',
    C: 'Cooking',
    F: 'Fashion',
    D: 'Dating',
    A: 'Awkward',
    S: 'Serious',
    G: 'Fun'
};

var Squires = {
    Eirlys: {
        name: 'Eirlys',
        hints: 'FFFMTCDFPPPMDCFFPTPPMPCFPMDDTTCCFMDPPTTCPTCMPDTTPDFCPCCPMFMFMMFCFCFDFCDFMFDDMTMCFCMDTTDDMDDDPDFCT',
        words: 'MPCPMTMMTMTFTTCDTFMTDFDDCTCPFFMMMTTTMCMMCPPTCPCCMCTMMTTDDMTCPFTTCMTMMMPTTPTMTMTFMTCMFPTTCCMTCMMDC',
        specs: {
            'LV1': {' 2.9': 'PT', '28.6': 'MD', '71.4': 'CT'},
            'LV2': {' 6.7': 'TF', '33.3': 'PT', '80.0': 'CM'},
            'LV3': {'20.0': 'MC', '40.0': 'TC', '80.0': 'MP'},
            'LV4': {'10.0': 'PD', '40.0': 'TC', '80.0': 'CT'}
        },
        color: ['#FCF1CE', '#EFC381'],
        image: {
            path: 'img/Eirlys.png',
            face: [0, 24, 389, 511, 0, 0],
            eyes: [
                [398, 0, 511, 50, 119, 122],
                [398, 51, 511, 101, 119, 122],
                [398, 102, 511, 152, 119, 122],
                [398, 153, 511, 203, 119, 122],
                [398, 204, 511, 254, 119, 122],
                [398, 255, 511, 305, 119, 122],
                [398, 306, 511, 356, 119, 122],
                [398, 357, 511, 407, 119, 122]
            ],
            lips: [
                [0, 0, 38, 18, 155, 183],
                [40, 0, 78, 18, 155, 183],
                [80, 0, 118, 18, 155, 183],
                [120, 0, 158, 18, 155, 183],
                [160, 0, 198, 18, 155, 183]
            ]
        }
    },
    Kanna: {
        name: 'Kanna',
        color: ['#FFE6E7', '#BA6A94'],
        image: {
            path: 'img/Kanna.png',
            face: [0, 30, 348, 511, 0, 30],
            eyes: [
                [410, 0, 511, 59, 86, 145],
                [410, 60, 511, 119, 86, 145],
                [410, 120, 511, 179, 86, 145],
                [410, 180, 511, 239, 86, 145],
                [410, 240, 511, 299, 86, 145],
                [410, 300, 511, 359, 86, 145],
                [410, 360, 511, 419, 86, 145]
            ],
            lips: [
                [356, 37, 386, 57, 127, 209],
                [356, 66, 386, 86, 127, 209],
                [356, 95, 386, 115, 127, 209],
                [356, 124, 386, 144, 127, 209]
            ]
        }
    },
    Elsie: {
        name: 'Elsie',
        words: 'CPFDFPDDPMTPDPTPMCPPPDPCPDMFPPPDCDTDPCMTPPMDCDCPPDPTDPMPPPFDPPMTDDPPPFPTCPFPFDMPPDTPPFDMMFFFFDPPM',
        specs: {
            'LV2': {' 0.7': '.T', '46.7': '.P', '83.3': '.C'},
            'LV3': {'25.0': '.D', '50.0': '.T', '80.0': '.M'},
            'LV4': {'25.5': '.T', '50.0': '.P', '80.0': '.C'}
        },
        color: ['#ADDFEF', '#6584C6'],
        image: {
            path: 'img/Elsie.png',
            face: [0, 31, 383, 511, 0, 31],
            eyes: [
                [386, 0, 511, 61, 155, 138],
                [386, 62, 511, 123, 155, 138],
                [386, 124, 511, 185, 155, 138],
                [386, 186, 511, 247, 155, 138],
                [386, 248, 511, 309, 155, 138],
                [386, 310, 511, 371, 155, 138],
                [386, 372, 511, 433, 155, 138],
                [386, 434, 511, 495, 155, 138]
            ],
            lips: [
                [0, 0, 51, 30, 190, 205],
                [53, 0, 104, 30, 190, 205],
                [106, 0, 157, 30, 190, 205],
                [159, 0, 210, 30, 190, 205],
                [212, 0, 263, 30, 190, 205],
                [265, 0, 316, 30, 190, 205]
            ]
        }
    },
    Dai: {
        name: 'Dai',
        hints: 'SGSGASSASASAAGAGSSSASSSSGSSSAGSSAASGASGASGSGGGAGASSGGSSGAAAASASAASASASAGSAAAGSSAGGASSGSSGAGSAGASG',
        words: 'PDPFTPPPPCPTPDMDFPPCFPPFFCFPCMDPCPFFCPFTPFPDMDPDPFCFFPFTTPPPPPFTCFPFPFPTPMCPTPFPMDTDFMFDFMFCPFCDF',
        specs: {
            'LV2': {' 2.0': 'AP', '33.3': 'SF', '80.0': 'GD'},
            'LV3': {'15.0': 'SP', '50.0': 'AT', '80.0': 'GM'},
            'LV4': {'15.0': 'GT', '45.0': 'SF', '80.0': 'SD'}
        },
        color: ['#E77163', '#C02D2E'],
        image: {
            path: 'img/Dai.png',
            face: [0, 0, 417, 511, 0, 0],
            eyes: [
                [419, 0, 511, 36, 175, 92],
                [419, 37, 511, 73, 175, 92],
                [419, 74, 511, 110, 175, 92],
                [419, 111, 511, 147, 175, 92],
                [419, 148, 511, 184, 175, 92],
                [419, 185, 511, 221, 175, 92],
                [419, 222, 511, 258, 175, 92]
            ],
            lips: [
                [419, 259, 511, 295, 175, 92],
                [467, 296, 511, 323, 201, 141],
                [467, 324, 511, 351, 201, 141],
                [467, 352, 511, 379, 201, 141],
                [467, 380, 511, 407, 201, 141],
                [467, 408, 511, 435, 201, 141]
            ]
        }
    },
    Logan: {
        name: 'Logan',
        color: ['#F7F4F4', '#7B676B'],
        image: {
            path: 'img/Logan.png',
            face: [0, 0, 377, 511, 0, 0],
            eyes: [
                [426, 0, 511, 45, 121, 78],
                [426, 46, 511, 91, 121, 78],
                [426, 92, 511, 137, 121, 78],
                [426, 138, 511, 183, 121, 78],
                [426, 184, 511, 229, 121, 78],
                [426, 230, 511, 275, 121, 78],
                [426, 276, 511, 321, 121, 78]
            ],
            lips: [
                [426, 337, 475, 365, 132, 137],
                [426, 375, 475, 403, 132, 137],
                [426, 414, 475, 442, 132, 137],
                [426, 454, 475, 482, 132, 137]
            ]
        }
    },
    Kaour: {
        name: 'Kaour',
        words: 'PPTCPDTCDCMMFDCFDMMMFDMFPMFTDMMPDMFMTTTPTDFCTPFDPDCMPFCCCFFPPTFTMTCDFTPFDTMMCMMFCCTFCDMFDCDFDTMCT',
        specs: {
            'LV2': {' 0.7': '.T', '53.3': '.P', '90.0': '.M'},
            'LV3': {'15.0': '.T', '40.0': '.T', '90.0': '.M'},
            'LV4': {'10.0': '.D', '56.7': '.T', '93.3': '.P'}
        },
        color: ['#736D8C', '#3C394A'],
        image: {
            path: 'img/Kaour.png',
            face: [0, 3, 369, 511, 0, 3],
            eyes: [
                [416, 0, 511, 44, 103, 86],
                [416, 45, 511, 89, 103, 86],
                [416, 90, 511, 134, 103, 86],
                [416, 135, 511, 179, 103, 86],
                [416, 180, 511, 224, 103, 86],
                [416, 225, 511, 269, 103, 86]
            ],
            lips: [
                [416, 298, 460, 322, 130, 142],
                [416, 331, 460, 355, 130, 142],
                [416, 365, 460, 389, 130, 142]
            ]
        }
    }
};

// Quick patch for dialog
$.fn.showModal = function () {
    this.each(function () {
        if (this.showModal) this.showModal();
    });
};
$.fn.close = function () {
    this.each(function () {
        if (this.close) this.close();
    });
};

// Init
(function () {
    // Variables
    var template = $('#tpl-card').html();
    var wrapper = $('#squire-list');
    var topmenu = $('#squire-menu');
    var search = $('#search');
    var helper = $('#helper');
    var specs = $('#specs');

    // Dialog polyfill
    dialogPolyfill.registerDialog(search[0]);
    dialogPolyfill.registerDialog(helper[0]);

    // Load configuration from storage
    function loadSquireConfig(squire) {
        var key = squire.key;
        var config = squire.config;
        // Display index
        config.index = localStorage.getItem(key + '_index') || '';
        config.index = parseInt(config.index, 10) || 0;
        // Search hints
        config.hints = localStorage.getItem(key + '_hints') || '';
        config.hints = config.hints.replace(/[^MTPCFDASG.]/g, '').split('');
        // Search words
        config.words = localStorage.getItem(key + '_words') || '';
        config.words = config.words.replace(/[^MTPCFD.]/g, '').split('');
        // Status of conversations
        config.status = localStorage.getItem(key + '_status') || '';
        try { config.status = JSON.parse(config.status); }
        catch (e) { config.status = {}; }
        // Special convos (current tab and visibility)
        config.specs_current = localStorage.getItem(key + '_specsCurrent') || '';
        config.specs_visible = localStorage.getItem(key + '_specsVisible') || '';
        config.specs_visible = parseInt(config.specs_visible, 10) || 0;
        // Disabled
        config.disabled = localStorage.getItem(key + '_disabled') || '';
        config.disabled = parseInt(config.disabled, 10) || 0;
    }

    // Save configuration
    function saveSquireConfig(squire) {
        var key = squire.key;
        var config = squire.config;
        // Display index
        localStorage.setItem(key + '_index', config.index);
        // Search hints
        localStorage.setItem(key + '_hints', config.hints.join(''));
        // Search words
        localStorage.setItem(key + '_words', config.words.join(''));
        // Status of conversations
        localStorage.setItem(key + '_status', JSON.stringify(config.status));
        // Special convos (current tab and visibility)
        localStorage.setItem(key + '_specsCurrent', config.specs_current);
        localStorage.setItem(key + '_specsVisible', config.specs_visible);
        // Special convos (current tab and visibility)
        localStorage.setItem(key + '_disabled', config.disabled);
    }

    // Fit canvas I to canvas O
    function resizeCanvas(I, O) {
        // Temporary canvas
        var A = document.createElement('canvas');
        var B = document.createElement('canvas');
        // Initialize
        A.width = B.width = I.width;
        A.height = B.height = I.height;
        A.getContext('2d').drawImage(I, 0, 0);
        // Resize by 50% every loop
        while (A.width > 2 * O.width && A.height > 2 * O.height) {
            // Resize B canvas
            B.width = (A.width > 2 * O.width) ? Math.round(A.width / 2) : A.width;
            B.height = (A.height > 2 * O.height) ? Math.round(A.height / 2) : A.height;
            // Copy A to B
            B.getContext('2d').clearRect(0, 0, B.width, B.height);
            B.getContext('2d').drawImage(A, 0, 0, B.width, B.height);
            // Swap variables
            B = [A, A = B][0];
        }
        // Resize to final size
        O.getContext('2d').clearRect(0, 0, O.width, O.height);
        O.getContext('2d').drawImage(A, 0, 0, O.width, O.height);
    }

    // Generate the squires's pictures
    function buildSquireCanvas(squire) {
        // Create canvas
        var iCanvas = document.createElement('canvas');
        var oCanvas = document.createElement('canvas');
        var tCanvas = document.createElement('canvas');
        // Set fixed size for output and thumbnail
        oCanvas.width = oCanvas.height = 350;
        tCanvas.width = tCanvas.height = 52;
        // Insert into DOM
        squire.card.find('.js-image').append(oCanvas);
        squire.menu.append(tCanvas);
        // Update data
        squire.image.canvas = {
            input: iCanvas,
            output: oCanvas,
            thumbnail: tCanvas
        };
        // Load image
        $('<img/>').one('load', function () {
            // Variables
            var face = squire.image.face;
            var eyes = squire.image.eyes;
            var lips = squire.image.lips;
            // Pick random eyes and lips
            eyes = eyes[Math.floor(Math.random() * eyes.length)];
            lips = lips[Math.floor(Math.random() * lips.length)];
            // Process input
            iCanvas.width = this.naturalWidth;
            iCanvas.height = this.naturalHeight;
            iCanvas.getContext('2d').drawImage(this, 0, 0);
            // Process output
            oCanvas.width = face[2] - face[0], face[3] - face[1];
            oCanvas.height = face[2] - face[0], face[3] - face[1];
            oCanvas.getContext('2d').fillStyle = squire.color[0];
            oCanvas.getContext('2d').fillRect(0, 0, oCanvas.width, oCanvas.height);
            oCanvas.getContext('2d').drawImage(iCanvas, face[0], face[1], face[2] - face[0], face[3] - face[1], 0, 0, face[2] - face[0], face[3] - face[1]);
            $(oCanvas).trigger('click');
            // Process thumbnail
            resizeCanvas(oCanvas, tCanvas);
        }).attr('src', squire.image.path);
    }


    // Event : Redraw image
    wrapper.on('click', '.js-card canvas', function () {
        // Variables
        var canvas = $(this);
        var squire = canvas.parents('.js-card').first().data('squire');
        var face = squire.image.face;
        var eyes = squire.image.eyes;
        var lips = squire.image.lips;
        // Pick random eyes and lips
        eyes = eyes[Math.floor(Math.random() * eyes.length)];
        lips = lips[Math.floor(Math.random() * lips.length)];
        // Redraw eyes and lips
        squire.image.canvas.output.getContext('2d').drawImage(squire.image.canvas.input, eyes[0], eyes[1], eyes[2] - eyes[0], eyes[3] - eyes[1], eyes[4] - face[0], eyes[5] - face[1], eyes[2] - eyes[0], eyes[3] - eyes[1]);
        squire.image.canvas.output.getContext('2d').drawImage(squire.image.canvas.input, lips[0], lips[1], lips[2] - lips[0], lips[3] - lips[1], lips[4] - face[0], lips[5] - face[1], lips[2] - lips[0], lips[3] - lips[1]);
        // Schedule redraw
        clearInterval(squire.image.timer);
        squire.image.timer = setTimeout(function () {
            canvas.trigger('click');
        }, 10000 + 10000 * Math.random());
    });

    // Event : Change conversation
    wrapper.on('goto', '.js-card', function (e, index) {
        // Variables
        var card = $(this);
        var squire = card.data('squire');
        if (!squire.words) return false;
        var hint, word, indexH, indexW, completed;
        // Store index
        squire.config.index = index > 0 ? index : 0;
        saveSquireConfig(squire);
        // Generate text for hint
        if (squire.hints) {
            indexH = ((squire.config.index % squire.hints.length) + squire.hints.length) % squire.hints.length;
            hint = squire.hints ? '<small>' + Translations[squire.hints[indexH]] + '</small>' : '';
        } else hint = '';
        // Generate text for word
        if (squire.words) {
            indexW = ((squire.config.index % squire.words.length) + squire.words.length) % squire.words.length;
            word = '<span>#' + (squire.config.index + 1) + ' - ' + Translations[squire.words[indexW]] + '</span>';
        } else word = '';
        // Update display
        card.find('.js-btn-main').html(hint + ' ' + word);
        completed = squire.config.status[squire.config.index];
        card.find('.js-status').toggleClass('completed', !!completed);
    });
    wrapper.on('click', '.js-btn-prev', function () {
        var card = $(this).parents('.js-card').first();
        card.trigger('goto', card.data('squire').config.index - 1);
    });
    wrapper.on('click', '.js-btn-next', function () {
        var card = $(this).parents('.js-card').first();
        card.trigger('goto', card.data('squire').config.index + 1);
    });

    // Event : Toggle status
    wrapper.on('click', '.js-status', function () {
        // Variables
        var card = $(this).parents('.js-card').first();
        var squire = card.data('squire');
        var completed = squire.config.status[squire.config.index] ? 0 : 1;
        // Toggle state
        card.find('.js-status').toggleClass('completed', !!completed);
        squire.config.status[squire.config.index] = completed;
        saveSquireConfig(squire);
        // Update display with a delay
        if (completed) setTimeout(function () {
            card.trigger('goto', squire.config.index + completed);
        }, 400);
    });

    // Event : Helper dialog
    $(document.body).on('click', '.js-btn-helper', function () {
        // Open modal
        helper.showModal();
    });
    helper.on('click', '.js-close', function () {
        helper.close();
    });

    // Event : Search dialog
    $(document.body).on('click', '.js-btn-search', function () {
        // Variables
        var card = $(this).parents('.js-card').first();
        var canvas, squire = card.data('squire');
        // Store squire in dialog
        search.data('squire', squire);
        // Update dialog
        canvas = document.createElement('canvas');
        canvas.style.borderColor = squire.color[1];
        canvas.width = squire.image.canvas.thumbnail.width;
        canvas.height = squire.image.canvas.thumbnail.height;
        canvas.getContext('2d').drawImage(squire.image.canvas.thumbnail, 0, 0);
        search.find('.js-title').empty().text(squire.name).prepend(canvas);
        // Update selects
        search.find('select').val('.');
        $.each(squire.config.hints, Function('i,v', '$(".js-hints select").eq(i).val(v);'));
        $.each(squire.config.words, Function('i,v', '$(".js-words select").eq(i).val(v);'));
        search.find('select').first().trigger('change');
        // Open
        search.showModal();
    });
    search.on('change', 'select', function () {
        var display = $('.js-words').children().css('background', 'none');
        var squire = search.data('squire');
        var inputH, inputW, hints, words;
        var pattern, sequence, match;
        var results, output, visual;
        // Load inputs
        inputH = $('.js-hints select').map(Function('return this.value;')).get();
        inputW = $('.js-words select').map(Function('return this.value;')).get();
        while (true) {
            if (inputH[inputH.length - 1] !== '.') break;
            if (inputW[inputW.length - 1] !== '.') break;
            inputH.pop();
            inputW.pop();
        }
        // Process hints
        if (squire.hints) {
            // Variables
            hints = [];
            pattern = new RegExp(inputH.join(''), 'g');
            sequence = squire.hints + squire.hints;
            // Match everything
            while (match = pattern.exec(sequence)) {
                if (2 * match.index < sequence.length) {
                    pattern.lastIndex = match.index + 1;
                    hints.push(match.index + inputH.length);
                } else break;
            }
        }
        // Process words
        if (squire.words) {
            // Variables
            words = [];
            pattern = new RegExp(inputW.join(''), 'g');
            sequence = squire.words + squire.words;
            // Match everything
            while (match = pattern.exec(sequence)) {
                if (2 * match.index < sequence.length) {
                    pattern.lastIndex = match.index + 1;
                    words.push(match.index + inputW.length);
                } else break;
            }
        }
        // Save filter
        squire.config.hints = inputH;
        squire.config.words = inputW;
        saveSquireConfig(squire);
        // Combine hint and words
        output = search.find('.js-result');
        if (!hints && !words) output = 'Unable to search.';
        else {
            // Merge results
            if (!hints) hints = words.sort();
            if (!words) words = hints.sort();
            results = hints.filter(function (v) {
                return words.indexOf(v) !== -1;
            });
            // Process
            switch (results.length) {
                case 0:
                    output = 'No match found.<br/>';
                    output += 'Please check your input.';
                    break;
                case 1:
                    if (inputW[inputW.length - 1] === '.') {
                        inputW.pop();
                        results[0]--;
                    }
                    display.eq(inputW.length).css('background', squire.color[0]);
                    output = 'Found one match at <b>#' + (results[0] + 1) + '</b><br/>';
                    output += '<a class="js-progress mdl-button mdl-button--raised" data-index="' + results[0] + '">';
                    output += 'Set progress to ' + (results[0] + 1);
                    output += '</a>';
                    break;
                default:
                    output = 'Found <b>' + results.length + '</b> matches.<br/>';
                    output += 'Please provide more data.';
            }
        }
        // Display
        search.find('.js-output').html(output).find('a').css('background', squire.color[1]);
    });
    search.on('click', '.js-progress', function () {
        // Variables
        var squire = search.data('squire');
        var i, index = $(this).data('index');
        // Reset progress
        squire.config.status = {};
        for (i = 0; i < index; i++) squire.config.status[i] = 1;
        saveSquireConfig(squire);
        // Update display
        squire.card.trigger('goto', index);
        search.close();
    });
    search.on('click', '.js-reset', function () {
        var squire = search.data('squire');
        search.find('select').val('.').first().trigger('change');
    });
    search.on('click', '.js-close', function () {
        search.close();
    });

    // Event : Specs
    wrapper.on('click', '.js-btn-specs', function () {
        var card = $(this).parents('.js-card').first();
        var specs = card.find('.js-specs').toggleClass('visible');
        var squire = card.data('squire');
        var visible = specs.is('.visible') ? 1 : 0;
        squire.config.specs_visible = visible;
        saveSquireConfig(squire);
    });
    wrapper.on('click', '.js-specs-lvl > a', function () {
        // Variables
        var btn = $(this);
        var idx = btn.prevAll().length;
        var txt = btn.parent().parent().children('.js-specs-txt').children().eq(idx);
        var squire = btn.parents('.js-card').data('squire');
        // Process
        if (txt.length) {
            btn.addClass('active').siblings().removeClass('active');
            txt.addClass('active').siblings().removeClass('active');
            squire.config.specs_current = btn.text();
            saveSquireConfig(squire);
        }
    });

    // Event : Menu
    topmenu.on('click', 'a', function () {
        var button = $(this);
        var squire = button.data('squire');
        var disabled = squire.config.disabled ? 0 : 1;
        squire.wrap.toggleClass('disabled', disabled);
        button.toggleClass('disabled', disabled);
        squire.config.disabled = disabled;
        saveSquireConfig(squire);
    });

    // Init : dialog
    $('.js-hints, .js-words').each(function () {
        // Variables
        var i;
        var wrapper = $(this);
        var values = wrapper.data('values').split('');
        var select = $('<select/>').attr('name', wrapper.data('name'));
        var styler = $('<div/>').append(select);
        // Populate the select
        select.append(new Option('---', '.'));
        for (i = 0; i < values.length; i++) select.append(new Option(Translations[values[i]], values[i]));
        for (i = 0; i < 5; i++) styler.clone().appendTo(wrapper);
    });

    // Init : squires
    $.each(Squires, function (key, squire) {
        // Create element
        var wrap = $('<div/>').addClass('squire-wrap').html(template);
        var menu = $('<a/>').data('squire', squire).appendTo(topmenu);
        var card = wrap.find('.js-card').data('squire', squire);
        var specsLvl = card.find('.js-specs-lvl');
        var specsTxt = card.find('.js-specs-txt');
        // Update squire element
        squire.key = key;
        squire.wrap = wrap;
        squire.card = card;
        squire.menu = menu;
        squire.config = {};
        loadSquireConfig(squire);
        // Update DOM
        menu.css({'background-color': squire.color[0], 'border-color': squire.color[1]});
        card.css('background-color', squire.color[0]);
        card.find('.js-title').text(squire.name);
        card.find('.js-status').css('background', squire.color[1]);
        // Disabled
        menu.toggleClass('disabled', !!squire.config.disabled);
        wrap.toggleClass('disabled', !!squire.config.disabled);
        // Initialize canvas
        buildSquireCanvas(squire);
        // Build special convos table
        $.each(squire.specs, function (level, data) {
            // Variables
            var active = (level == squire.config.specs_current);
            var button = $('<a/>').text(level).appendTo(specsLvl);
            var wrap = $('<ul/>').appendTo(specsTxt);
            var line, hint, word;
            // Style and active class
            button.css('border-color', squire.color[1]);
            button.toggleClass('active', active);
            wrap.toggleClass('active', active);
            // Insert first line
            line = $('<li/>').appendTo(wrap);
            $('<div/>').text('%').appendTo(line);
            $('<div/>').text('Hint').appendTo(line);
            $('<div/>').text('Word').appendTo(line);
            // Create each line
            $.each(data, function (pct, hw) {
                line = $('<li/>').appendTo(wrap);
                hint = Translations[hw[0]] ? Translations[hw[0]] : '-';
                word = Translations[hw[1]] ? Translations[hw[1]] : '-';
                $('<div/>').text(pct).appendTo(line);
                $('<div/>').text(hint).appendTo(line);
                $('<div/>').text(word).appendTo(line);
            });
        });
        if (!specsLvl.children('.active').length) specsLvl.children().first().addClass('active');
        if (!specsTxt.children('.active').length) specsTxt.children().first().addClass('active');
        if (squire.config.specs_visible) card.find('.js-specs').addClass('visible');
        // Disable unused elements
        if (!squire.words) squire.card.addClass('no-words');
        if (!squire.hints) squire.card.addClass('no-hints');
        if (!squire.specs) squire.card.addClass('no-specs');
        // Update DOM and index
        wrap.appendTo(wrapper);
        card.trigger('goto', squire.config.index);
    });
})();
