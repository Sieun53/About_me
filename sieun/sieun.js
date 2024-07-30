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


// skill
$(document).ready(function() {
    const circles = $(".circle-graph");

    // Intersection Observer 콜백 함수
    function handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const node = entry.target;
                let perNum = $(node).attr('circleProgress');
                let fillColors = ["#021526", "#021526", "#021526"]; // 그래프의 색상 배열
                let fillColor = fillColors[$(node).index()];

                // 이미 초기화된 경우에는 초기화하지 않음
                if (!$(node).hasClass('initialized')) {
                    $(node).circleProgress({
                        size: 150, // 그래프 크기
                        value: perNum / 100, // 그래프에 표시될 값
                        startAngle: 300, // 시작지점
                        thickness: 15, // 그래프 두께
                        fill: { // 그래프 선 색
                            color: fillColor
                        },
                        animation: {
                            duration: 1200,
                        },
                        lineCap: "round", // 그래프 선 모양
                        reverse: false // 그래프가 진행되는 방향
                    });

                    // 클래스 추가하여 초기화 완료 표시
                    $(node).addClass('initialized');
                }
                
                // Intersection Observer가 계속해서 관찰하도록 하기 위해 재관찰
                observer.observe(node);
            } else {
                // 화면에서 벗어났을 때 클래스 제거하여 다시 초기화 가능
                $(entry.target).removeClass('initialized');
            }
        });
    }


    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 요소가 화면의 50% 이상 보일 때
    });

    // 모든 circle-graph 요소에 대해 observer 등록
    circles.each(function() {
        observer.observe(this);
    });
});





// project

  document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 들어올 때 'show' 클래스를 추가
          entry.target.classList.add('show');
        } else {
          // 요소가 뷰포트에서 나갈 때 'show' 클래스를 제거 (필요시)
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 }); // 10% 이상 보일 때 감지

    // 모든 프로젝트 아이템에 대해 Observer 등록
    document.querySelectorAll('.project-item').forEach(item => {
      observer.observe(item);
    });
  });



 //헤더 색 변환

// sieun.js

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const barBg = document.querySelector('.bar-bg');
    const sectionAbout = document.querySelector('.section-about');
    const sectionAboutTop = sectionAbout.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= sectionAboutTop) {
            header.classList.add('scrolled');
            barBg.classList.add('hidden');
        } else {
            header.classList.remove('scrolled');
            barBg.classList.remove('hidden');
        }
    });
});


