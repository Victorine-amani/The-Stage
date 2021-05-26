function link() {
    const input = document.getElementById("text").value;
    switch (input) {
        case "Romance":
            window.location.href = "https://toryhope.wordpress.com/2021/05/20/categoryculture-2/"
            break;
        case "Culture":
            window.location.href = "https://toryhope.wordpress.com/2021/05/20/categoryculture/"
            break;
        case "Introspect":
            window.location.href = "https://toryhope.wordpress.com/2021/05/20/toryhope-closure-wordpress-com/"
            break;
        case "Religion":
            window.location.href = "https://toryhope.wordpress.com/2021/05/21/category-psycho/ "
            break;
    }
}

function user_data() {
    let name1 = document.getElementsByName("name1")
    let name2 = document.getElementsByName("name2")
    let email = document.getElementsByName("email")
    let psw1 = document.getElementsByName("psw1")
    let psw2 = document.getElementsByName("psw2")

    if (name1.value != null && name2.value != null && email.value != null && psw1.value != null && psw2.value != null) {

        return (true)
    } else {
        alert("Fill in the entire form");
    }
}