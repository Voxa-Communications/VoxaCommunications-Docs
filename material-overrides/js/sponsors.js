async function loadSponsors() {
      try {
        let response;
        try {
          // Try GitHub URL first
          response = await fetch('https://raw.githubusercontent.com/Voxa-Communications/.github/refs/heads/main/static/sponsors.json');
        } catch {
          // Fallback to local sponsors.json
          response = await fetch('./sponsors.json');
        }
        
        if (!response.ok) {
          throw new Error('Failed to fetch sponsors data');
        }
        
        const data = await response.json();
        renderSponsors(data);
      } catch (error) {
        document.getElementById('sponsors-content').innerHTML = 
          '<div class="error">Failed to load sponsors</div>';
      }
    }
    
    function renderSponsors(sponsorsData) {
      const content = document.getElementById('sponsors-content');
      content.innerHTML = '';
      
      const tiers = ['platinum', 'gold', 'silver', 'bronze'];
      
      tiers.forEach(tierName => {
        const sponsors = sponsorsData.sponsors[tierName];
        if (sponsors && sponsors.length > 0) {
          const tierData = sponsorsData.tiers[tierName];
          
          const tierDiv = document.createElement('div');
          tierDiv.className = `sponsor-tier-embed ${tierName}`;
          
          const titleH3 = document.createElement('h3');
          titleH3.className = 'tier-title-embed';
          titleH3.style.color = tierData.color;
          titleH3.textContent = tierData.name;
          tierDiv.appendChild(titleH3);
          
          const gridDiv = document.createElement('div');
          gridDiv.className = `sponsors-grid-embed ${tierName}-grid-embed`;
          
          sponsors.forEach(sponsor => {
            const cardA = document.createElement('a');
            cardA.className = 'sponsor-card-embed';
            cardA.href = sponsor.website;
            cardA.target = '_blank';
            cardA.rel = 'noopener noreferrer';
            cardA.title = sponsor.description;
            
            const logoImg = document.createElement('img');
            logoImg.className = 'sponsor-logo-embed';
            logoImg.src = sponsor.logo;
            logoImg.alt = sponsor.name;
            logoImg.onerror = function() {
              this.src = `https://via.placeholder.com/150x60/666666/FFFFFF?text=${encodeURIComponent(sponsor.name)}`;
            };
            
            const nameDiv = document.createElement('div');
            nameDiv.className = 'sponsor-name-embed';
            nameDiv.textContent = sponsor.name;
            
            cardA.appendChild(logoImg);
            cardA.appendChild(nameDiv);
            gridDiv.appendChild(cardA);
          });
          
          tierDiv.appendChild(gridDiv);
          content.appendChild(tierDiv);
        }
      });
    }
document.addEventListener('DOMContentLoaded', loadSponsors);