"use strict";var headerLinks=document.getElementsByClassName("header__link");function headerLinkClicked(a){for(var b=document.getElementsByClassName("header__link"),c=0;c<b.length;c++)b[c].classList.remove("current");a.classList.add("current"),menuOpened&&menuToggle()}var footerLinks=document.getElementsByClassName("footer__link");function footerLinkClicked(a){for(var b=0;b<footerLinks.length;b++)footerLinks[b].classList.remove("current");a.classList.add("current")}var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open"),logoChange()};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()};var logo=document.querySelector(".header__logo");logo.innerHTML="<img src=\"images/logo.webp\" alt=\"Xutor\"></img>";function logoChange(){headerMenu.classList.contains("open")?setTimeout(function(){logo.innerHTML="<img src=\"images/logo-dark.webp\" alt=\"Xutor\"></img>"},220):logo.innerHTML="<img src=\"images/logo.webp\" alt=\"Xutor\"></img>"}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckxpbmtzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGVhZGVyTGlua0NsaWNrZWQiLCJlIiwiaSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1lbnVPcGVuZWQiLCJtZW51VG9nZ2xlIiwiZm9vdGVyTGlua3MiLCJmb290ZXJMaW5rQ2xpY2tlZCIsImVsIiwibiIsImhlYWRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXJNZW51IiwidG9nZ2xlIiwibG9nb0NoYW5nZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJjb21wb3NlZFBhdGgiLCJpbmNsdWRlcyIsImxvZ28iLCJpbm5lckhUTUwiLCJjb250YWlucyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJhQUNBLEdBQUlBLENBQUFBLFdBQVcsQ0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxjQUFoQyxDQUFsQixDQUVBLFFBQVNDLENBQUFBLGlCQUFULENBQTJCQyxDQUEzQixDQUE0QixDQUUxQixPQURJSixDQUFBQSxDQUFXLENBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsY0FBaEMsQ0FDbEIsQ0FBUUcsQ0FBQyxDQUFHLENBQVosQ0FBZUEsQ0FBQyxDQUFHTCxDQUFXLENBQUNNLE1BQS9CLENBQXVDRCxDQUFDLEVBQXhDLENBQ0VMLENBQVcsQ0FBQ0ssQ0FBRCxDQUFYLENBQWVFLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFNBQWhDLEVBRUZKLENBQUMsQ0FBQ0csU0FBRixDQUFZRSxHQUFaLENBQWdCLFNBQWhCLENBTDBCLENBTXZCQyxVQU51QixFQU94QkMsVUFBVSxFQUViLENBR0QsR0FBSUMsQ0FBQUEsV0FBVyxDQUFHWCxRQUFRLENBQUNDLHNCQUFULENBQWdDLGNBQWhDLENBQWxCLENBRUEsUUFBU1csQ0FBQUEsaUJBQVQsQ0FBMkJDLENBQTNCLENBQTZCLENBQzNCLElBQUksR0FBSUMsQ0FBQUEsQ0FBQyxDQUFHLENBQVosQ0FBZUEsQ0FBQyxDQUFHSCxXQUFXLENBQUNOLE1BQS9CLENBQXVDUyxDQUFDLEVBQXhDLENBQ0VILFdBQVcsQ0FBQ0csQ0FBRCxDQUFYLENBQWVSLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFNBQWhDLEVBRUZNLENBQUUsQ0FBQ1AsU0FBSCxDQUFhRSxHQUFiLENBQWlCLFNBQWpCLENBQ0QsQyxHQUdLTyxDQUFBQSxZQUFZLENBQ2hCZixRQUFRLENBQUNnQixhQUFULENBQXVCLGlCQUF2QixDLENBQ0lDLFVBQVUsQ0FBcUJqQixRQUFRLENBQUNnQixhQUFULENBQXVCLGVBQXZCLEMsQ0FDakNQLFVBQVUsRyxDQUNSQyxVQUFVLENBQUcsVUFBSyxDQUN0QkQsVUFBVSxDQUFHLENBQUNBLFVBRFEsQ0FFdEJNLFlBQVksQ0FBQ1QsU0FBYixDQUF1QlksTUFBdkIsQ0FBOEIsTUFBOUIsQ0FGc0IsQ0FHdEJELFVBQVUsQ0FBQ1gsU0FBWCxDQUFxQlksTUFBckIsQ0FBNEIsTUFBNUIsQ0FIc0IsQ0FJdEJDLFVBQVUsRUFDWCxDLENBRURKLFlBQVksQ0FBQ0ssT0FBYixDQUF1QlYsVSxDQUV2QlcsTUFBTSxDQUFDRCxPQUFQLENBQWlCLFNBQUNqQixDQUFELENBQWtCLENBQzVCLENBQUFNLFVBQVUsRUFBS04sQ0FBQyxDQUFDbUIsWUFBRixHQUFpQkMsUUFBakIsQ0FBMEJSLFlBQTFCLENBQWYsRUFBMkRaLENBQUMsQ0FBQ21CLFlBQUYsR0FBaUJDLFFBQWpCLENBQTBCTixVQUExQixDQUQvQixFQUUvQlAsVUFBVSxFQUViLEMsQ0FHRCxHQUFNYyxDQUFBQSxJQUFJLENBQUd4QixRQUFRLENBQUNnQixhQUFULENBQXVCLGVBQXZCLENBQWIsQ0FDQVEsSUFBSSxDQUFDQyxTQUFMLHFELENBRUEsUUFBU04sQ0FBQUEsVUFBVCxFQUFtQixDQUNkRixVQUFVLENBQUNYLFNBQVgsQ0FBcUJvQixRQUFyQixDQUE4QixNQUE5QixDQURjLENBRWZDLFVBQVUsQ0FBQyxVQUFLLENBQ2RILElBQUksQ0FBQ0MsU0FBTCwwREFDRCxDQUZTLENBRVAsR0FGTyxDQUZLLENBTWZELElBQUksQ0FBQ0MsU0FBTCxxREFFSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlYWRlciBNZW51IExpbmtzXHJcbmxldCBoZWFkZXJMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbGluaycpO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyTGlua0NsaWNrZWQoZSl7XHJcbiAgbGV0IGhlYWRlckxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19saW5rJyk7XHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IGhlYWRlckxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgIGhlYWRlckxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB9XHJcbiAgZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcclxuICBpZihtZW51T3BlbmVkKXtcclxuICAgIG1lbnVUb2dnbGUoKVxyXG4gIH1cclxufVxyXG5cclxuLy8gRm9vdGVyIE1lbnUgTGlua3NcclxubGV0IGZvb3RlckxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9vdGVyX19saW5rJyk7XHJcblxyXG5mdW5jdGlvbiBmb290ZXJMaW5rQ2xpY2tlZChlbCl7XHJcbiAgZm9yKGxldCBuID0gMDsgbiA8IGZvb3RlckxpbmtzLmxlbmd0aDsgbisrKXtcclxuICAgIGZvb3RlckxpbmtzW25dLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB9IFxyXG4gIGVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxufVxyXG5cclxuLy8gSGVhZGVyIE1lbnUgQnV0dG9uXHJcbmNvbnN0IGhlYWRlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b25cIik7XHJcbmNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKTtcclxubGV0IG1lbnVPcGVuZWQgPSBmYWxzZTtcclxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgbG9nb0NoYW5nZSgpO1xyXG59O1xyXG5cclxuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gIGlmICggbWVudU9wZW5lZCAmJiAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJCdXR0b24pICYmICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlck1lbnUpKXtcclxuICAgIG1lbnVUb2dnbGUoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBIZWFkZXIgTG9nbyBDaGFuZ2UgT24gTWVudSBPcGVuZWRcclxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28nKTtcclxubG9nby5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCJpbWFnZXMvbG9nby53ZWJwXCIgYWx0PVwiWHV0b3JcIj48L2ltZz5gXHJcblxyXG5mdW5jdGlvbiBsb2dvQ2hhbmdlKCl7XHJcbiAgaWYoaGVhZGVyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSl7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbG9nby5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCJpbWFnZXMvbG9nby1kYXJrLndlYnBcIiBhbHQ9XCJYdXRvclwiPjwvaW1nPmBcclxuICAgIH0sIDIyMCk7XHJcbiAgfWVsc2V7XHJcbiAgICBsb2dvLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cImltYWdlcy9sb2dvLndlYnBcIiBhbHQ9XCJYdXRvclwiPjwvaW1nPmBcclxuICB9XHJcbn0iXX0=
