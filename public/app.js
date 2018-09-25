$(function(){
    //GET request to pull items already saved
    $.ajax({ url: "/api/showList", method: "GET" })
        .then(function (theList) {
            console.log(theList)
            renderItems('#itemList', theList);
        });
        //render function to output items to page
        const renderItems = function(outputElement, dataList){

            for (let i = 0; i < dataList.length; i++) {

                const output = $(outputElement);

                const thebutton = `<button class="newButt"><i class="fas fa-times"></i></button>`;

                const listItem = $("<li class='allItems'>");

                listItem.append(
                    $("<h2>").append(`${dataList[i].item} ${thebutton}`)
                );

                output.append(listItem);
            }
        }


    //submit listener and function for new Item and to render to page
    $('#submit').on('click', function(event){
        event.preventDefault();

        const newItem = {
            item: $('#enteredItem').val().trim()
        };


        $.ajax({ url: '/api/addList', method: 'POST', data: newItem }).then(
            function(){  
                    const displayItem = $('#enteredItem').val().trim();
                    renderItem(displayItem);
                    $('#enteredItem').val('');
                    console.log(newItem);
            });
        //Render function
        const renderItem = function(theItem){

            const singleListItem = $("<li class='allItems'>");

            singleListItem.append(
                $("<h2>").append(`${theItem} <button class="newButt"><i class="fas fa-times"></i></button> `)
            );

           $('#itemList').append(singleListItem);
        }

    });

    $('#itemList').on('click', '.newButt', );





});
    