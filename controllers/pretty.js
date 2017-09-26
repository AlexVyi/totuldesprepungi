
    function toggleMenu () {
        var check = document.getElementById('show-menu');
        var checkLbl = document.getElementById('checkLabel')
      if(check.checked){
         checkLbl.innerHTML = "Arata meniul"
      }else {
        checkLbl.innerHTML = "Ascunde meniul"
    }
}