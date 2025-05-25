document.addEventListener("DOMContentLoaded", function () {
    const commentBoxes = document.querySelectorAll(".noncon");

    commentBoxes.forEach(box => {
        const replyButton = box.querySelector(".noncon-side1");
        const replyArea = box.querySelector(".cwrite-coment");

        if (replyButton && replyButton.textContent.trim() === "대댓글") {
            replyButton.addEventListener("click", function () {
                if (replyArea) {
                    replyArea.style.display =
                        replyArea.style.display === "block" ? "none" : "block";
                    box.style.height = "auto";
                }
            });
        }

        const pen = box.querySelector(".cwrite-coment .pen");
        if (pen) {
            pen.addEventListener("click", function () {
                const commentWrapper = pen.closest(".cwrite-coment");
                if (commentWrapper) {
                    const textarea = commentWrapper.querySelector("textarea");
                    if (textarea) {
                        const text = textarea.value.trim();
                        alert(`입력한 대댓글 내용:\n${text || "(내용 없음)"}`);
                    }
                }
            });
        }
    });
});



    const posvot = document.querySelector(".posvot");
    const likeNum = document.querySelector(".likenum");

    if (posvot && likeNum) {
        posvot.addEventListener("click", function () {
            let count = parseInt(likeNum.textContent, 10);
            likeNum.textContent = count + 1;
        });
    }

    
    const scrap = document.querySelector(".scrap");
    const starnum = document.querySelector(".starnum");
    const scrapText = document.querySelector(".scrapn");

    let isScrapped = false; 

    if (scrap && starnum && scrapText) {
        scrap.addEventListener("click", function () {
            let count = parseInt(starnum.textContent, 10);

            if (!isScrapped) {
                starnum.textContent = count + 1;
                scrapText.textContent = "스크랩";
                isScrapped = true;
                scrap.style.width = "70px";
            } else {
                starnum.textContent = count - 1;
                scrapText.textContent = "스크랩 취소";
                isScrapped = false;
                scrap.style.width = "100px";
            }
        });
}

