/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var base_url = 'http://portanaturasi.com/wp-admin/admin-ajax.php?action=getCustomerList&somethingimportant=whatissoimportant&format=json';
 
function example()
{
var response = "";
var form_data = {
username: username,
password: password
};
$.ajax({
type: "POST",
url: base_url,
data: form_data,
success: function(response)
{
/*response = '[{"Language":"jQuery","ID":"1"},{"Language":"C#","ID":"2"},
{"Language":"PHP","ID":"3"},{"Language":"Java","ID":"4"},
{"Language":"Python","ID":"5"},{"Language":"Perl","ID":"6"},
{"Language":"C++","ID":"7"},{"Language":"ASP","ID":"8"},
{"Language":"Ruby","ID":"9"}]'*/
console.log(response);
var json_obj = $.parseJSON(response);//parse JSON
var output="<ul>";
for (var i in json_obj)
{
output+="<li>" + json_obj[i].Language + ", " + json_obj[i].ID + "</li>";
}
output+="</ul>";
$('span').html(output);
},
dataType: "json"//set to JSON
})
} 
