
        function myFunction() {
          var input, filter, table, tr, td, i;
          input = document.getElementById("idsearch");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
           }       
         }
       }
       function myFunction1() {
          var input, filter, table, tr, td, i;
          input = document.getElementById("fnamesearch");
          filter = input.value.toUpperCase();
          console.log(filter);
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
           }       
         }
       }
       function myFunction2() {
          var input, filter, table, tr, td, i;
          input = document.getElementById("lnamesearch");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
           }       
         }
       }  