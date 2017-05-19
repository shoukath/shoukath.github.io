var STATBoard = function() {
    'use strict';

    if (document.location.href.indexOf('favorite_id=86103') === -1) {
        return;
    }

    var $ = jQuery,
        css = '', addGlobalStyle,
        $allTeams = $('.full-team-list'),
        $inTpmAnalysisTeams = $('[lane-id="In TPM Analysis"]').find('.full-team-list'),
        $readyForDevelopmentTeams = $('[lane-id="Ready for Development"]').find('.full-team-list'),
        $inDevelopmentTeams = $('[lane-id="In Development"]').find('.full-team-list'),
        $coloredTags = $('.colored-tags');

    css = `
    #row_0 .card-icon {
        max-width: none;
        width: calc(98% - 10px);
    }
    #row_0 .card-inner-wrapper {
        padding-top: 20px;
    }
    #row_0 .colored-tags {
        transform: rotate(0);
        position: static;
        display: inline-block;
        width: auto;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 400;
        font-size: 11px;
    }
    #row_0 .card-inner-wrapper .colored-tags {
        display: none;
    }
    #row_0 .card-name {
        font-size: 15px;
        font-weight: 500;
        margin-top: 6px;
    }
    #row_0 .inplace-add {
        display: none;
    }
    #row_0 .card-icon:before {
        padding-bottom: 52%;
    }
    #row_0 .card-summary-number {
        text-align: right;
        font-size: 22px;
        margin-top: -16px;
    }
    #row_0 .card-summary-number a {
        text-decoration: none;
    }
    #row_0 .slot {
        height: 35px;
        width: 35px;
        background: none;
        border: none;
        box-shadow: none;
    }
    #swimming-pool .header-title {
        font-size: 15px;
        letter-spacing: 0.8px;
    }
    #swimming-pool .lane-card-number {
        display: none;
    }
    #swimming-pool .readonly-wip {
        display: none;
    }
    .card-points {
        position: absolute;
        left: 16px;
        bottom: 5px;
        font-weight: bold;
        font-size: 26px;
    }
    .grid-actions {
        text-align: left;
        background: #FDC5C6;
        font-size: 18px;
        font-weight: bold;
        display: none;
        margin: 10px 0;
        padding-left: 20px;
        height: auto;
    }
    `;
    addGlobalStyle = function (css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    };
    Object.fromXML = function( source, includeRoot ) {
        if( typeof source == 'string' )
        {
            try
            {
                if ( window.DOMParser )
                    source = ( new DOMParser() ).parseFromString( source, "application/xml" );
                else if( window.ActiveXObject )
                {
                    var xmlObject = new ActiveXObject( "Microsoft.XMLDOM" );
                    xmlObject.async = false;
                    xmlObject.loadXML( source );
                    source = xmlObject;
                    xmlObject = undefined;
                }
                else
                    throw new Error( "Cannot find an XML parser!" );
            }
            catch( error )
            {
                return false;
            }
        }

        var result = {};

        if( source.nodeType == 9 )
            source = source.firstChild;
        if( !includeRoot )
            source = source.firstChild;

        while( source ) {
            if( source.childNodes.length ) {
                if( source.tagName in result ) {
                    if( result[source.tagName].constructor != Array ) {
                        result[source.tagName] = [result[source.tagName]];
                    }
                    result[source.tagName].push( Object.fromXML( source ) );
                }
                else {
                    result[source.tagName] = Object.fromXML( source );
                }
            } else if( source.tagName )
                result[source.tagName] = source.nodeValue;
            else if( !source.nextSibling ) {
                if( source.nodeValue.clean() !== "" ) {
                    result = source.nodeValue.clean();
                }
            }
            source = source.nextSibling;
        }
        return result;
    };

    String.prototype.clean = function() {
        var self = this;
        return this.replace(/(\r\n|\n|\r)/gm, "").replace(/^\s+|\s+$/g, "");
    };

    var pointsQuery = `https://eiwork.mingle.thoughtworks.com/api/v2/projects/ewe_air_bellevue_team/cards/execute_mql.json?mql=SELECT number, 'story points' where pod=STAT and (status="In Development" OR status="In Testing" OR STATUS="Ready for Development") order by priority`;
    var pointsCall = $.get(pointsQuery);

    setTimeout(function(){
        $allTeams.find('.slot').hide();
        $inDevelopmentTeams.find('[data-slot-id="Dev Owner"]').show().css('left', '0px');

        $coloredTags.each(function (index, tag) {
            $(tag).parent().before(tag);
        });

        addGlobalStyle(css);

        $('.card-summary-number a').each(function (index, cardNumberObj) {
            cardNumberObj.innerHTML = cardNumberObj.innerHTML.replace('#', '');
        });

        $('#ft').hide();

        if ((moment().get('hours') >= 10 && moment().get('hours') < 17)) {
            if (moment().weekday() ===2) { // Every Wednesday
                let markup = '<ul><li>Could any of the "Ready to Signoff" cards be moved to "Accept" status?</li><li>Is any TnL story ready to be turned on?</li></ul>';
                $('.grid-actions').html(markup).show();
            } else if (moment().week() % 2 === 0 && moment().day() === 5) { // Every alternate Friday. Last day of the Sprint
                $('.grid-actions').html('<ul><li>Could we demo any stories next Monday?</li></ul>').css('background', '#92e89e').show();
            }
        }

        // window.scrollTo(0, jQuery('.table-with-nothing-following-it').offset().top);
        window.scrollTo(0, jQuery('.grid-results').offset().top);

        var url = 'https://eiwork.mingle.thoughtworks.com/api/v2/projects/ewe_air_bellevue_team/cards/17316.xml';

        /*$('[lane-id="In Development"], [lane-id="Ready for Development"], [lane-id="In Testing"]')
            .find('[data-card-number]')
            .each(function(index, card) {
            var $card = $(card);
            var cardNumber = $card.data('card-number');
            var updatedUrl = location.origin + '/api/v2' + location.pathname.replace('grid', cardNumber + '.xml');//url.replace('17316', cardNumber);
            $.get(updatedUrl)
                .done(function (response) {
                var properties = Object.fromXML(response).properties.property;
                $.each(properties, function (index, property) {
                    if (property.name==='Story Points') {
                        console.log(property.value);
                        $card.append('<div class="card-points">'+property.value+'</div>');
                    }
                });
            });
        });*/

        pointsCall.done(function (response) {
            $.each(response, function (index, cardData) {
                console.log(cardData);
                $('[lane-id="In Development"], [lane-id="Ready for Development"], [lane-id="In Testing"]').find('[data-card-number]').each(function(index, card) {
                    var $card = $(card);
                    if (cardData['Number'] == $card.data('card-number')) {
                        $card.append('<div class="card-points">'+cardData['Story Points']+'</div>');
                    }
                });
            });
        });
    }, 500);

};