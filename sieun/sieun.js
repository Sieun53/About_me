// 링크의 href 속성이 '#'인 경우
document.addEventListener('DOMContentLoaded', function() {
    var snsLinks = document.querySelectorAll('.link-sns a');

    snsLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (link.getAttribute('href') === '#') {
                event.preventDefault(); // 링크의 기본 동작을 막음
                alert('준비중입니다 !'); // 팝업 메시지를 표시
                
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade');
  
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }
  
    // Initial check
    checkVisibility();
  
    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
  });



  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card'); // 모든 카드 요소 선택

    function checkVisibility() {
      const windowHeight = window.innerHeight;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          card.classList.add('visible'); // 카드가 화면에 보일 때 visible 클래스 추가
        } else {
          card.classList.remove('visible'); // 카드가 화면에서 사라질 때 visible 클래스 제거
        }
      });
    }

    // Initial check
    checkVisibility();

    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
});
