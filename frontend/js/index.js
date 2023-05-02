//function
function selectTrue(id) {
    var select = $('<select>')
    select.append($('<option selected="selected">').val('true').text('True'))
    select.append($('<option>').val('false').text('False'))
    select.attr("id", id)
    return select
}

function selectFalse(id) {
    var select = $('<select>')
    select.append($('<option>').val('true').text('True'))
    select.append($('<option selected="selected">').val('false').text('False'))
    select.attr("id", id)
    return select
}

function disableUpdateButton () {
    $('#updateButton').prop('disabled', true)
}

//index.js
function initIndex() {
    $('#ddForm').change(function() {
        $('#updateButton').prop('disabled', false)
    });

    disableUpdateButton()
}

function updateDD() {
    var regexPatternTrue = new RegExp("true");

    const idDD = document.getElementById('idDD').value;
    const stat = document.getElementById('stat').value;
    const reproduction = document.getElementById('reproduction').value;
    const endurance = regexPatternTrue.test(document.getElementById('endurance').value)
    const maturite = regexPatternTrue.test(document.getElementById('maturite').value)
    const amour = regexPatternTrue.test(document.getElementById('amour').value)
    const feconde = regexPatternTrue.test(document.getElementById('feconde').value)
    const fecondee = regexPatternTrue.test(document.getElementById('fecondee').value)

    data = {
        id: idDD,
        stat: stat,
        endurance: endurance,
        maturite: maturite,
        amour: amour,
        feconde: feconde,
        fecondee: fecondee,
        reproduction: reproduction
    }

    fetch(`http://localhost:3000/api/dragodinde/${idDD}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
          },
        body: JSON.stringify(data)
    })
}

//FONCTION RELATED TO GETDD()
function getDD() {
    const id = document.getElementById('ddId').value;

    fetch(`http://localhost:3000/api/dragodinde/${id}`)
        .then(response => response.json())
        .then(data => {
            dragodinde = data.data

            $('#idDD').val(dragodinde.id)
            $('#couleur').text(dragodinde.couleur)
            $('#sexe').text(dragodinde.sexe)
            $('#stat').val(dragodinde.stat)
            $('#reproduction').val(dragodinde.reproduction)

            if (dragodinde.amour === true) {
                $('#amourDiv').empty()
                selectTrue("amour").appendTo('#amourDiv')
            } else {
                $('#amourDiv').empty()
                selectFalse("amour").appendTo('#amourDiv')
            }

            if (dragodinde.maturite === true) {
                $('#maturiteDiv').empty()
                selectTrue("maturite").appendTo('#maturiteDiv')
            } else {
                $('#maturiteDiv').empty()
                selectFalse("maturite").appendTo('#maturiteDiv')
            }

            if (dragodinde.endurance === true) {
                $('#enduranceDiv').empty()
                selectTrue("endurance").appendTo('#enduranceDiv')
            } else {
                $('#enduranceDiv').empty()
                selectFalse("endurance").appendTo('#enduranceDiv')
            }

            if (dragodinde.feconde === true) {
                $('#fecondeDiv').empty()
                selectTrue("feconde").appendTo('#fecondeDiv')
            } else {
                $('#fecondeDiv').empty()
                selectFalse("feconde").appendTo('#fecondeDiv')
            }

            if (dragodinde.fecondee === true) {
                $('#fecondeeDiv').empty()
                selectTrue("fecondee").appendTo('#fecondeeDiv')
            } else {
                $('#fecondeeDiv').empty()
                selectFalse("fecondee").appendTo('#fecondeeDiv')
            }

            $('select').formSelect();

            disableUpdateButton()

        })       
        .catch(error => {
            console.log("Error " + error)
        })
        
}