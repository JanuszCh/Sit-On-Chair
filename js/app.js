document.addEventListener("DOMContentLoaded", function() {

    // menu
    var liMenu = document.querySelector('div.head ul li:last-child');
    var subMenu = liMenu.querySelector('div.subMenuDiv');

    liMenu.addEventListener('mouseover', function() {
        subMenu.style.display = "block";
    });
    liMenu.addEventListener('mouseout', function() {
        subMenu.style.display = "none";
    });


    //slider
    var leftBtn = document.querySelector('div.sliderLeft');
    var rightBtn = document.querySelector('div.sliderRight');
    var imgLi = document.querySelectorAll('div.sliderImg ul li');

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });

    rightBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        imgLi[index].style.display = "initial";
    });


    //po najechaniu na zdjecie znika nazwa produktu
    var product1 = document.querySelector('div.product1');
    var product2 = document.querySelector('div.product2');

    product1.addEventListener('mouseover', function() {
        product1.firstElementChild.classList.add('showTitle');
    });
    product1.addEventListener('mouseout', function() {
        product1.firstElementChild.classList.remove('showTitle');
    });
    product2.addEventListener('mouseover', function() {
        product2.firstElementChild.classList.add('showTitle');
    });
    product2.addEventListener('mouseout', function() {
        product2.firstElementChild.classList.remove('showTitle');
    });


    //selector
    var choiceForm = document.querySelector('div.form');
    var arrowChairName = choiceForm.querySelector('span.list_arrow.chairName');
    var chairNameSelect = choiceForm.querySelector('span.chairName');
    var arrowChairColor = choiceForm.querySelector('span.list_arrow.chairColor');
    var chairColorSelect = choiceForm.querySelector('span.chairColor');
    var arrowPattern = choiceForm.querySelector('span.list_arrow.chairPattern');
    var chairPatternSelect = choiceForm.querySelector('span.chairPattern');
    var checkboxClick = choiceForm.querySelector('div.checkbox');
    var checkboxInput = choiceForm.querySelector('input[type=checkbox]');

    var li = choiceForm.querySelectorAll('li'); ///?


    var summaryPanel = document.querySelector('div.summary_panel');
    var panelLeft = summaryPanel.querySelector('div.panel_left');
    var panelRight = summaryPanel.querySelector('div.panel_right');
    var chairNameSummary = panelLeft.querySelector('h4.title');
    var chairPrice = panelRight.querySelector('h4.title');
    var chairColor = panelLeft.querySelector('span.color');
    var chairColorPrice = panelRight.querySelector('span.color');
    var chairPattern = panelLeft.querySelector('span.pattern');
    var chairPatternPrice = panelRight.querySelector('span.pattern');
    var transport = panelLeft.querySelector('span.transport');
    var transportPrice = panelRight.querySelector('span.transport');
    var totalPrice = summaryPanel.querySelector('div.totalPrice');

    var summaryChairPrice = 0;
    var summaryColorPrice = 0;
    var summaryPatterntPrice = 0;
    var summaryTransportPrice = 0;



    arrowChairName.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
                chairNameSelect.innerHTML = this.innerHTML;
                chairNameSummary.innerHTML = this.innerHTML;
                chairPrice.innerHTML = this.dataset.chairPrice;
                summaryChairPrice = 0;
                summaryChairPrice = summaryChairPrice + parseInt(this.dataset.chairPrice);
                totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.toggle('showList');
            });
        }
    });

    arrowChairColor.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
                chairColorSelect.innerHTML = this.innerHTML;
                chairColor.innerHTML = this.innerHTML;
                chairColorPrice.innerHTML = this.dataset.colorPrice;
                summaryColorPrice = 0;
                summaryColorPrice = summaryColorPrice + parseInt(this.dataset.colorPrice);
                totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.toggle('showList');
            });
        }
    });

    arrowPattern.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function() {
                chairPatternSelect.innerHTML = this.innerHTML;
                chairPattern.innerHTML = this.innerHTML;
                chairPatternPrice.innerHTML = this.dataset.patternPrice;
                summaryPatterntPrice = 0;
                summaryPatterntPrice = summaryPatterntPrice + parseInt(this.dataset.patternPrice);
                totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.toggle('showList');
            });
        }
    });

    checkboxClick.addEventListener('click', function() {
        if (checkboxInput.checked) {
            transport.innerHTML = "Transport";
            transportPrice.innerHTML = checkboxInput.dataset.transportPrice;
            summaryTransportPrice = 0;
            summaryTransportPrice = summaryTransportPrice + parseInt(checkboxInput.dataset.transportPrice);
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
        } else {
            transport.innerHTML = "";
            transportPrice.innerHTML = "";
            summaryTransportPrice = 0;
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice;
        }
    });


    // znikanie listy nie działa idealnie
    //
    // var list = document.querySelectorAll('ul.list_panel');
    //
    // for (var i = 0; i < list.length; i++) {
    //     list[i].addEventListener('mouseout', function() {
    //             this.classList.toggle('showList');
    //     });
    // }








});
