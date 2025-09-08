...
      // ---- PROFILE DATA OBJECT ----
   const profileData = {
      name: "mia khali", // Change for new creator
      verified: true,
      handle: "@kali",
      status: "Available now",
      avatar: "v1_4.png",
      cover: "v4_144.png",
      bannerAd: "https://via.placeholder.com/400x90/ff6b6b/ffffff?text=Banner+Ad",
      photoCount: 246,
      videoCount: 162,
      likes: "9.3k",
      bioBullets: [
        "Exclusive personalized content",
        "Direct and continuous interaction",
        "Regular updates with new material"
      ],
      offerBanner: "https://via.placeholder.com/400x100/764ba2/ffffff?text=Special+Offer+50%25+OFF",
      mainPhotos: [
        {src: "https://via.placeholder.com/150x150/ff9ff3/ffffff?text=Photo+1", url: "https://example.com/photo1"},
        {src: "https://via.placeholder.com/150x150/54a0ff/ffffff?text=Photo+2", url: "https://example.com/photo2"},
        {src: "https://via.placeholder.com/150x150/5f27cd/ffffff?text=Photo+3", url: "https://example.com/photo3"}
      ],
      statsPhotos: [
        "https://via.placeholder.com/150x150/ff6b9d/ffffff?text=Photo+1",
        "https://via.placeholder.com/150x150/c44569/ffffff?text=Photo+2",
        "https://via.placeholder.com/150x150/f8b500/ffffff?text=Photo+3"
      ],
      statsVideos: [
        "https://via.placeholder.com/150x150/636e72/ffffff?text=Video+1",
        "https://via.placeholder.com/150x150/2d3436/ffffff?text=Video+2",
        "https://via.placeholder.com/150x150/636e72/ffffff?text=Video+3"
      ]
    }; 
    // ---- END PROFILE DATA ----

    const unlockUrl = "https://t.mbslr2.com/371938/8780/0?aff_sub=eri&bo=2779,2778,2777,2776,2775&source=eri&po=6533&aff_sub5=SF_006OG000004lmDN";

    function renderProfile() {
      document.getElementById("profilePicture").src = profileData.avatar;
      document.getElementById("profilePicture").alt = profileData.name + " Avatar";
      document.getElementById("bannerArea").style.backgroundImage = `url('${profileData.cover}')`;
      document.querySelector(".name").innerHTML = profileData.name + (profileData.verified ? ' <span class="verified">✓</span>' : '');
      document.getElementById("photoStats").textContent = `📷 ${profileData.photoCount} photos`;
      document.getElementById("videoStats").textContent = `🎥 ${profileData.videoCount} videos`;
      document.getElementById("likes").textContent = `❤️ ${profileData.likes}`;
      document.querySelector(".handle").innerHTML = profileData.handle + `<span class="status"><span class="dot"></span> ${profileData.status}</span>`;
      document.getElementById("bannerAdImage").querySelector("img").src = profileData.bannerAd;
      document.getElementById("creatorName").textContent = profileData.name;
      document.getElementById("profileBannerImg").src = profileData.offerBanner;

      // Bio bullets
      const bioList = document.getElementById("bioBullets");
      bioList.innerHTML = "";
      profileData.bioBullets.forEach(bullet => {
        const li = document.createElement("li");
        li.textContent = bullet;
        bioList.appendChild(li);
      });

      // Main photo grid
      const mainGrid = document.getElementById("mainPhotoGrid");
      mainGrid.innerHTML = "";
      profileData.mainPhotos.forEach((photo, i) => {
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = "Photo " + (i + 1);
        img.className = "photo";
        img.onclick = () => window.open(photo.url, '_blank');
        mainGrid.appendChild(img);
      });
    }

    function showButtonPopup(type) {
      const buttonData = {
        explicit: {
          name: "🔞 Explicit Content",
          title: "Premium Adult Content",
          bulletPoints: [
            "Exclusive content for adults only",
            "Limited and personalized material", 
            "Full access to the premium collection"
          ],
          bannerUrl: "https://via.placeholder.com/400x100/ff4444/ffffff?text=Adult+Content+Warning",
          actionText: "🔓 View Content",
          finalUrl: unlockUrl
        },
        livestream: {
          name: "👁️ +18 Livestream",
          title: "Live Interactive Sessions",
          bulletPoints: [
            "Real-time livestream 24/7",
            "Direct and private interaction",
            "Exclusive and personalized sessions"
          ],
          bannerUrl: "https://via.placeholder.com/400x100/764ba2/ffffff?text=Live+Now+-+Join+Stream",
          actionText: "🎥 Join Now",
          finalUrl: unlockUrl
        }
      };
      const data = buttonData[type];
      document.getElementById("buttonPopupHeader").textContent = data.name;
      document.getElementById("buttonPopupTitle").textContent = data.title;
      const bulletList = document.getElementById("buttonBulletPoints");
      bulletList.innerHTML = "";
      data.bulletPoints.forEach(point => {
        const li = document.createElement("li");
        li.textContent = point;
        bulletList.appendChild(li);
      });
      document.getElementById("buttonPopupBannerImg").src = data.bannerUrl;
      document.getElementById("buttonActionBtn").textContent = data.actionText;
      document.getElementById("buttonActionBtn").setAttribute("data-url", data.finalUrl);
      document.getElementById("buttonPopupBanner").setAttribute("data-url", data.finalUrl);
      document.getElementById("buttonPopup").style.display = "flex";
    }

    function showProfilePopup() {
      document.getElementById("profilePopup").style.display = "flex";
    }

    function showStatsPopup(type) {
      const statsData = {
        photos: {
          title: "📷 Photo Collection",
          images: profileData.statsPhotos,
          unlockUrl: unlockUrl
        },
        videos: {
          title: "🎥 Video Collection",
          images: profileData.statsVideos,
          unlockUrl: unlockUrl
        }
      };
      const data = statsData[type];
      document.getElementById("statsTitle").textContent = data.title;
      const statsGrid = document.getElementById("statsGrid");
      statsGrid.innerHTML = "";
      data.images.forEach((imageSrc, index) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `${type} ${index + 1}`;
        img.onclick = () => {
          window.open(unlockUrl, '_blank');
        };
        statsGrid.appendChild(img);
      });
      const unlockBtn = document.createElement("button");
      unlockBtn.className = "popup-unlock-btn";
      unlockBtn.textContent = type === 'photos' ? '🔓 Unlock Photos' : '🔓 Unlock Videos';
      unlockBtn.onclick = () => {
        window.open(unlockUrl, '_blank');
      };
      statsGrid.appendChild(unlockBtn);
      document.getElementById("statsPopup").style.display = "flex";
    }

    document.addEventListener('DOMContentLoaded', function() {
      renderProfile();
      document.getElementById("profilePicture").onclick = showProfilePopup;
      document.getElementById("bannerArea").onclick = showProfilePopup;
      document.getElementById("closeProfileIcon").onclick = () => {
        document.getElementById("profilePopup").style.display = "none";
      };
      document.getElementById("closeButtonIcon").onclick = () => {
        document.getElementById("buttonPopup").style.display = "none";
      };
      document.getElementById("buttonPopupBanner").onclick = () => {
        const url = document.getElementById("buttonPopupBanner").getAttribute("data-url");
        window.open(url, '_blank');
        document.getElementById("buttonPopup").style.display = "none";
      };
      document.getElementById("buttonActionBtn").onclick = () => {
        const url = document.getElementById("buttonActionBtn").getAttribute("data-url");
        window.open(url, '_blank');
        document.getElementById("buttonPopup").style.display = "none";
      };
      document.getElementById("profilePopupBanner").onclick = () => {
        window.open(unlockUrl, '_blank');
        document.getElementById("profilePopup").style.display = "none";
      };
      document.getElementById("profileActionBtn").onclick = () => {
        window.open(unlockUrl, '_blank');
        document.getElementById("profilePopup").style.display = "none";
      };
      document.getElementById("closeStatsIcon").onclick = () => {
        document.getElementById("statsPopup").style.display = "none";
      };
      document.getElementById("statsPopup").onclick = (e) => {
        if (e.target.id === "statsPopup") {
          document.getElementById("statsPopup").style.display = "none";
        }
      };
      document.getElementById("profilePopup").onclick = (e) => {
        if (e.target.id === "profilePopup") {
          document.getElementById("profilePopup").style.display = "none";
        }
      };
      document.getElementById("buttonPopup").onclick = (e) => {
        if (e.target.id === "buttonPopup") {
          document.getElementById("buttonPopup").style.display = "none";
        }
      };
      document.getElementById("explicitBtn").onclick = () => {
        showButtonPopup("explicit");
      };
      document.getElementById("livestreamBtn").onclick = () => {
        showButtonPopup("livestream");
      };
      document.getElementById("unlockBtn").onclick = () => {
        window.open(unlockUrl, '_blank');
      };
      document.getElementById("photoStats").onclick = () => { showStatsPopup("photos"); };
      document.getElementById("videoStats").onclick = () => { showStatsPopup("videos"); };
    });
...
