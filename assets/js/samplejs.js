imageElem = document.getElementById('image')
imageDsp = document.getElementById('image_dsp')
function previewImage(){
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent){
        imageDsp.src = ofEvent.target.result;
    }
}
        function addRow() {
            const table = document.getElementById('dataTable');
            const newRow = table.insertRow();

            const cell1 = newRow.insertCell();
            const cell2 = newRow.insertCell();
            const cell3 = newRow.insertCell();

            cell1.innerHTML = '<input type="text" name="PName[]" />';
            cell2.innerHTML = '<input type="email" name="Plink[]" />';
            cell3.innerHTML = '<input type="text" name="Description[]" />';
            // cell4.innerHTML = '<button onclick="removeRow(this)">Remove</button>';
        }

        function addExpRow() {
            const table = document.getElementById('expDataTable');
            const newRow = table.insertRow();

            const cell1 = newRow.insertCell();
            const cell2 = newRow.insertCell();
            const cell3 = newRow.insertCell();

            cell1.innerHTML = '<input type="text" name="title[]" />';
            cell2.innerHTML = '<input type="text" name="comapny[]" />';
            cell3.innerHTML = '<input type="date" id="dateInput" name="selectedDate[]" />';
            // cell4.innerHTML = '<button onclick="removeRow(this)">Remove</button>';
        }

        function removeRow(button) {
            const table = document.getElementById('dataTable');
            const rowIndex = button.parentNode.parentNode.rowIndex;

            if (rowIndex > 0) { // Ensure we don't remove the header row
            table.deleteRow(rowIndex);
            }
        }

    let tableOutput="";
    function readTableValues() {
        console.log("read Table values function");
        const table = document.getElementById('dataTable');
        console.log("table:")
         console.log(table)
         const rows = table.getElementsByTagName('tr');
     
        
        // let output = '';
        for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        cells = Array.from(cells);
        cells = cells.map(cell => cell.children[0])
        cells = cells.map(cell => cell.value)
        console.log("cells:")
        console.log(cells)
        console.log(cells.length)
            if (cells.length === 3) {
                const name = cells[0];
                const link = cells[1];
                const desc = cells[2];
                tableOutput += `<p><b>${i}</b> Worked on <b>${name}</b>. You can find it on this ${link}. The project is about ${desc} </p>`;
                
            }
        }
        console.log("tableOutput:"+tableOutput);
    }

    let expTableOutput="";
    function readExpTableValues() {
        console.log("read Table values function");
        const table = document.getElementById('expDataTable');
        console.log("table:")
         console.log(table)
         const rows = table.getElementsByTagName('tr');
     
        
        // let output = '';
        for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        cells = Array.from(cells);
        cells = cells.map(cell => cell.children[0])
        cells = cells.map(cell => cell.value)
        console.log("cells:")
        console.log(cells)
        console.log(cells.length)
            if (cells.length === 3) {
                const name = cells[0];
                const link = cells[1];
                const desc = cells[2];
                expTableOutput += `<p><b>${i}</b> Worked as <b>${name}</b> for <b> ${link}</b> till ${desc} </p>`;
                
            }
        }
        console.log("expTableOutput:"+expTableOutput);
    }





    document.getElementById('submitButton').addEventListener('click', function () {
      // Get form values
      readExpTableValues();
      readTableValues();
      const Fname = document.getElementById('Fname').value; const Lname = document.getElementById('Lname').value;
      const email = document.getElementById('email').value;
      const Phoneno = document.getElementById('Phoneno').value;
      const Designation = document.getElementById('Designation').value;
      const Address = document.getElementById('Address').value;
      const school = document.getElementById('School10').value;
      const School = document.getElementById('School12').value;
      const University = document.getElementById('University').value;
      const board = document.getElementById('Board10').value;
      const Board = document.getElementById('Board12').value;
      const marks = document.getElementById('marks10').value;
      const Marks = document.getElementById('marks12').value;
      const Degree = document.getElementById('Degree').value;
      const CGPA = document.getElementById('CGPA').value;
      const Skills = document.getElementById('Skills').value;
      const Image = document.getElementById('image').value;
      
  
     // Display the data on the screen

      console.log("tableOutput outside func:"+tableOutput);
      const outputDiv = document.getElementById('output');
      const projectDiv = document.getElementById('project_output');
      const educationDiv = document.getElementById('education_output');
      const skillsDiv = document.getElementById('skills_output');
      const expDiv = document.getElementById('experience_output');
      outputDiv.innerHTML = ` <div class="col-md-12">
      <p><b>Name:</b> ${Fname} ${ Lname}</p><p><b>Email:</b> ${email}</p><p><b>Phone no. :</b> ${Phoneno}</p><p><b>Designation :</b> ${Designation}</p><p><b>Address :</b> ${Address}</p> </div>`;
      educationDiv.innerHTML = `<p><b>Education</b></p>
            <table border="1">
                <tr>
                    <th>Degree</th>
                    <th>School/College</th>
                    <th>Board/University</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>Matriculation</td>
                    <td>${school}</td>
                    <td>${board}</td>
                    <td>${marks}</td>
                </tr>
                <tr>
                    <td>Intermediate</td>
                    <td>${School}</td>
                    <td>${Board}</td>
                    <td>${Marks}</td>
                </tr>
                <tr>
                    <td>Graduation</td>
                    <td>KIIT</td>
                    <td>KIIT University</td>
                    <td>${CGPA}</td>
                </tr>
            </table>  
      `;
      skillsDiv.innerHTML = `<p><b>Skills:</b> ${Skills} </p>`;
      projectDiv.innerHTML = `<p><b>Projects:</b> ${tableOutput}</p>`;
      expDiv.innerHTML = `<p><b>Experience:</b> ${expTableOutput}</p>`;
      const formElement = document.getElementById('myForm');
      formElement.remove();
      const labelElement = document.getElementById('image_label');
      labelElement.remove();
      const imageElement = document.getElementById('image');
      imageElement.remove();

    //     const addRowButton = document.getElementById('addButton');
    //     addRowButton.remove();
    //    const SubmitButton = document.getElementById('submitButton');
    //   SubmitButton.remove();
      window.print()    
    });
