"use strict";var headerLinks=document.getElementsByClassName("header__link");function headerLinkClicked(a){for(var b=document.getElementsByClassName("header__link"),c=0;c<b.length;c++)b[c].classList.remove("current");a.classList.add("current"),menuOpened&&menuToggle()}var footerLinks=document.getElementsByClassName("footer__link");function footerLinkClicked(a){for(var b=0;b<footerLinks.length;b++)footerLinks[b].classList.remove("current");a.classList.add("current")}var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open"),logoChange()};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()};var logo=document.querySelector(".header__logo");logo.innerHTML="<img src=\"images/logo.webp\" alt=\"Xutor\"></img>";function logoChange(){headerMenu.classList.contains("open")?setTimeout(function(){logo.innerHTML="<img src=\"images/logo-dark.webp\" alt=\"Xutor\"></img>"},220):logo.innerHTML="<img src=\"images/logo.webp\" alt=\"Xutor\"></img>"}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckxpbmtzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGVhZGVyTGlua0NsaWNrZWQiLCJlIiwiaSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1lbnVPcGVuZWQiLCJtZW51VG9nZ2xlIiwiZm9vdGVyTGlua3MiLCJmb290ZXJMaW5rQ2xpY2tlZCIsImVsIiwibiIsImhlYWRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXJNZW51IiwidG9nZ2xlIiwibG9nb0NoYW5nZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJjb21wb3NlZFBhdGgiLCJpbmNsdWRlcyIsImxvZ28iLCJpbm5lckhUTUwiLCJjb250YWlucyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJhQUNBLEdBQUlBLENBQUFBLFdBQVcsQ0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxjQUFoQyxDQUFsQixDQUVBLFFBQVNDLENBQUFBLGlCQUFULENBQTJCQyxDQUEzQixDQUE0QixDQUUxQixPQURJSixDQUFBQSxDQUFXLENBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsY0FBaEMsQ0FDbEIsQ0FBUUcsQ0FBQyxDQUFHLENBQVosQ0FBZUEsQ0FBQyxDQUFHTCxDQUFXLENBQUNNLE1BQS9CLENBQXVDRCxDQUFDLEVBQXhDLENBQ0VMLENBQVcsQ0FBQ0ssQ0FBRCxDQUFYLENBQWVFLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFNBQWhDLEVBRUZKLENBQUMsQ0FBQ0csU0FBRixDQUFZRSxHQUFaLENBQWdCLFNBQWhCLENBTDBCLENBTXZCQyxVQU51QixFQU94QkMsVUFBVSxFQUViLENBS0QsR0FBSUMsQ0FBQUEsV0FBVyxDQUFHWCxRQUFRLENBQUNDLHNCQUFULENBQWdDLGNBQWhDLENBQWxCLENBRUEsUUFBU1csQ0FBQUEsaUJBQVQsQ0FBMkJDLENBQTNCLENBQTZCLENBQzNCLElBQUksR0FBSUMsQ0FBQUEsQ0FBQyxDQUFHLENBQVosQ0FBZUEsQ0FBQyxDQUFHSCxXQUFXLENBQUNOLE1BQS9CLENBQXVDUyxDQUFDLEVBQXhDLENBQ0VILFdBQVcsQ0FBQ0csQ0FBRCxDQUFYLENBQWVSLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFNBQWhDLEVBRUZNLENBQUUsQ0FBQ1AsU0FBSCxDQUFhRSxHQUFiLENBQWlCLFNBQWpCLENBQ0QsQyxHQUdLTyxDQUFBQSxZQUFZLENBQ2hCZixRQUFRLENBQUNnQixhQUFULENBQXVCLGlCQUF2QixDLENBQ0lDLFVBQVUsQ0FBcUJqQixRQUFRLENBQUNnQixhQUFULENBQXVCLGVBQXZCLEMsQ0FDakNQLFVBQVUsRyxDQUNSQyxVQUFVLENBQUcsVUFBSyxDQUN0QkQsVUFBVSxDQUFHLENBQUNBLFVBRFEsQ0FFdEJNLFlBQVksQ0FBQ1QsU0FBYixDQUF1QlksTUFBdkIsQ0FBOEIsTUFBOUIsQ0FGc0IsQ0FHdEJELFVBQVUsQ0FBQ1gsU0FBWCxDQUFxQlksTUFBckIsQ0FBNEIsTUFBNUIsQ0FIc0IsQ0FJdEJDLFVBQVUsRUFDWCxDLENBRURKLFlBQVksQ0FBQ0ssT0FBYixDQUF1QlYsVSxDQUV2QlcsTUFBTSxDQUFDRCxPQUFQLENBQWlCLFNBQUNqQixDQUFELENBQWtCLENBQzVCLENBQUFNLFVBQVUsRUFBS04sQ0FBQyxDQUFDbUIsWUFBRixHQUFpQkMsUUFBakIsQ0FBMEJSLFlBQTFCLENBQWYsRUFBMkRaLENBQUMsQ0FBQ21CLFlBQUYsR0FBaUJDLFFBQWpCLENBQTBCTixVQUExQixDQUQvQixFQUUvQlAsVUFBVSxFQUViLEMsQ0FHRCxHQUFNYyxDQUFBQSxJQUFJLENBQUd4QixRQUFRLENBQUNnQixhQUFULENBQXVCLGVBQXZCLENBQWIsQ0FDQVEsSUFBSSxDQUFDQyxTQUFMLHFELENBRUEsUUFBU04sQ0FBQUEsVUFBVCxFQUFtQixDQUNkRixVQUFVLENBQUNYLFNBQVgsQ0FBcUJvQixRQUFyQixDQUE4QixNQUE5QixDQURjLENBRWZDLFVBQVUsQ0FBQyxVQUFLLENBQ2RILElBQUksQ0FBQ0MsU0FBTCwwREFDRCxDQUZTLENBRVAsR0FGTyxDQUZLLENBTWZELElBQUksQ0FBQ0MsU0FBTCxxREFFSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlYWRlciBNZW51IExpbmtzXHJcbmxldCBoZWFkZXJMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbGluaycpO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyTGlua0NsaWNrZWQoZSl7XHJcbiAgbGV0IGhlYWRlckxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19saW5rJyk7XHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IGhlYWRlckxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgIGhlYWRlckxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB9XHJcbiAgZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcclxuICBpZihtZW51T3BlbmVkKXtcclxuICAgIG1lbnVUb2dnbGUoKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBGb290ZXIgTWVudSBMaW5rc1xyXG5sZXQgZm9vdGVyTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb290ZXJfX2xpbmsnKTtcclxuXHJcbmZ1bmN0aW9uIGZvb3RlckxpbmtDbGlja2VkKGVsKXtcclxuICBmb3IobGV0IG4gPSAwOyBuIDwgZm9vdGVyTGlua3MubGVuZ3RoOyBuKyspe1xyXG4gICAgZm9vdGVyTGlua3Nbbl0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIH0gXHJcbiAgZWwuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG59XHJcblxyXG4vLyBIZWFkZXIgTWVudSBCdXR0b25cclxuY29uc3QgaGVhZGVyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuY29uc3QgaGVhZGVyTWVudTogSFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpO1xyXG5sZXQgbWVudU9wZW5lZCA9IGZhbHNlO1xyXG5jb25zdCBtZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gIG1lbnVPcGVuZWQgPSAhbWVudU9wZW5lZDtcclxuICBoZWFkZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBsb2dvQ2hhbmdlKCk7XHJcbn07XHJcblxyXG5oZWFkZXJCdXR0b24ub25jbGljayA9IG1lbnVUb2dnbGU7XHJcblxyXG53aW5kb3cub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgaWYgKCBtZW51T3BlbmVkICYmICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlckJ1dHRvbikgJiYgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTWVudSkpe1xyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEhlYWRlciBMb2dvIENoYW5nZSBPbiBNZW51IE9wZW5lZFxyXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbycpO1xyXG5sb2dvLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cImltYWdlcy9sb2dvLndlYnBcIiBhbHQ9XCJYdXRvclwiPjwvaW1nPmBcclxuXHJcbmZ1bmN0aW9uIGxvZ29DaGFuZ2UoKXtcclxuICBpZihoZWFkZXJNZW51LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKXtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsb2dvLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cImltYWdlcy9sb2dvLWRhcmsud2VicFwiIGFsdD1cIlh1dG9yXCI+PC9pbWc+YFxyXG4gICAgfSwgMjIwKTtcclxuICB9ZWxzZXtcclxuICAgIGxvZ28uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiaW1hZ2VzL2xvZ28ud2VicFwiIGFsdD1cIlh1dG9yXCI+PC9pbWc+YFxyXG4gIH1cclxufSJdfQ==
