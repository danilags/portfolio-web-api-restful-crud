$(document).ready(function() {
  $.ajax({
    url: 'http://localhost:3000/api/memo',
    type: 'GET',
    success: function(memo) {
      memo.forEach(function(memo) {
        $('#list-memo').prepend(`
          <tr id="${memo.id}">
            <td>
              <div class="title-memo">
                <p>${memo.title}</p>
              </div>
            </td>
            <td>
              <div class="content-memo">
                <p>${memo.content}</p>
              </div>
            </td>
            <td>
              <div id="action">
                <a href="#" onclick="editMemo('${memo.id}')">edit</a>
                <a href="#" onclick="deleteMemo('${memo.id}')">delete</a>
              </div>
            </td>
          </tr>
        `)
      })
    }
  })
})

function addMemo() {
  $.ajax({
    url: `http://localhost:3000/api/memo`,
    type: 'POST',
    data : {
      title: $('#title').val(),
      content: $('#content').val()
    },
    success: function(data) {

      $('#title').val()
      $('#content').val()

      $('#list-memo').prepend(`
          <td>
            <div class="title-memo">
              <p>${memo.title}</p>
            </div>
          </td>
          <td>
            <div class="content-memo">
              <p>${memo.content}</p>
            </div>
          </td>
      `)
    }
  })
}

// function editMemo(id) {
//   $.ajax({
//     url: `http://localhost:3000/api/memo/${id}`
//     type: 'PUT',
//     data: {
//       title: $('#e')
//     }
//   })
// }


function deleteMemo(id) {

  $.ajax({
    url: `http://localhost:3000/api/memo/${id}`,
    type: 'DELETE',
    success: function(memo) {
      $(`#${id}`).remove()
    }
  })
}
