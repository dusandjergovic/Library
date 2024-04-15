$(document).ready(function() {
    $("#addBook").click(function() {
        $("#addNewBook").show()
        $("#addNewBook").reset();
    })

    $("#close").click(function() {
        $("#addNewBook").hide();
    })

    $("#submit").click(function(e) {

        $("#addNewBook").hide();

        let title = $("#title").val();
        let author = $("#author").val();
        let pages = $("#pages").val();
        let readBook = $("#readBook")

        let userTitle = $("<span>");
        userTitle.text(`Title: ${title}`);

        let userAuthor = $("<span>");
        userAuthor.text(`Author: ${author}`);

        let userPages = $("<span>");
        userPages.text(`${pages} pages`);

        let readOrNoRead = $('<div>');
        readOrNoRead.addClass('readOrNoRead')

        let removeBook = $("<button>");
        removeBook.text('Remove Book')
        removeBook.addClass('removeBook');
        removeBook.click(function() {
            $(this).closest('section').hide();
        })

        let userBook = $("<section>");
        userBook.addClass("active");
        userBook.append(userTitle, userAuthor, userPages, readOrNoRead, removeBook);

        $("#containerForBooks").append(userBook)

        if(readBook.prop('checked') === true) {
            readOrNoRead.text('Read')
            readOrNoRead.css({
                'background-color': 'green',
                'width': '100%',
                'height': '1rem'
            })
        } else {
            readOrNoRead.text("Didn't Read")
            readOrNoRead.css({
                'background-color': 'red'
            })
        }

    })
})