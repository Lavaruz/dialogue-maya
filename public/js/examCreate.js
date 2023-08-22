$(document).ready(() => {
  const d = new Date();
  let text = d.toLocaleString("id-ID", {
    dateStyle: "medium",
  });
  $("#date").html(text);

  let quest_length = 1;
  let question_pilgan = `
  <div class="question_pilgan">  
    <textarea data-max-words="2" name="question_text" class='soal-text' placeholder="Masukan Dialogue" required></textarea>
  </div>
`;

  function addQuestionBox() {
    $("#add-question").remove();
    $("#submit-form").append([
      `
        <div class="questions-box">
          <div class="questions"></div>
          <div class="add-more">
            <button id="add-more" type="button">Tambah Soal</button>
          </div>
        </div>
        <div class="submit-input">
          <button type="button" id="selesai">Selesai</button>
        </div>
        `,
    ]);
    addMoreQuestion();
  }
  function addMoreQuestion() {
    // if (validateForm() == false) return;
    $(".questions").append([
      `
          <div class="question">
            <div class="question-head">
              <div class="question-head-info">
                <p><b>Dialogue ${quest_length}</b></p>
              </div>
            </div>
            ${question_pilgan}
            <div class="delete-quest" title="Hapus Dialog" >
              <span><i class="uil uil-trash-alt"></i></span>
            </div>
          </div>
        `,
    ]);
    quest_length += 1;
  }

  // ADD QUESTION BOX
  $("#add-question").on("click", addQuestionBox);
  // ADD MORE QUESTION
  $(".main-background").on("click", "#add-more", addMoreQuestion);

  $(".main-background").on("click", ".delete-quest", function () {
    $(this).parent().remove();
  });
  $(".main-background").on("click", "#selesai", () => {
    $(".submit-layer").css("visibility", "visible");
  });
  $(".ubah-button").on("click", () => {
    $(".submit-layer").css("visibility", "hidden");
  });
  $(".file-toolarge button").on("click", (e) => {
    e.preventDefault();
    $(".file-layer").css("visibility", "hidden");
  });
  $(".main-background").on("input",".soal-text", function(){
    console.log($(this).prop('offsetHeight'));
    $(this).css('height', $(this).prop('scrollHeight') + 'px');
  })
});
