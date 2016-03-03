document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName("small")[0].innerText = "Version " + chrome.app.getDetails().version;
});
document.addEventListener(
    "submit",
    function(e) {
        e.preventDefault();
        return false;
    }
);
document.addEventListener(
    "click",
    function(e) {
        e.preventDefault();
        if (e.target.tagName !== "BUTTON") return;
        e.preventDefault();
        var env = document.getElementsByName('environment')[0].value,
            val = document.getElementsByName('id')[0].value;
        switch (e.target.name) {
            case 'customer':
                chrome.extension.getBackgroundPage().post(env + "admin/jobs/logincustomer", {
                    "customer_id": val
                });
                break;
            case 'financing':
                chrome.extension.getBackgroundPage().post(env + "admin/jobs/loginfinancing", {
                    "financing_request_id": val
                });
                break;
        }
    }
);
