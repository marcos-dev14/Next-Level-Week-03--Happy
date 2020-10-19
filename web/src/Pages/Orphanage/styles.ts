import styled from 'styled-components';

export const Container = styled.div`
  #page-orphanage {
  display: flex;
  min-height: 100vh;
}

#page-orphanage main {
  flex: 1;
}

.orphanage-details {
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  overflow: hidden;
}

.orphanage-details > img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.orphanage-details .images {
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
}
 
.orphanage-details .images button {
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;
  
  opacity: 0.6;
}

.orphanage-details .images button.active {
  opacity: 1;
}

.orphanage-details .images button img {
  width: 100%;
  height: 88px;
  object-fit: cover;
  
}

.orphanage-details .orphanage-details-content {
  padding: 80px;
}

.orphanage-details .orphanage-details-content h1 {
  color: #4D6F80;
  font-size: 54px;
  line-height: 54px;
  margin-bottom: 8px;
}

.orphanage-details .orphanage-details-content p {
  line-height: 28px;
  color: #5C8599;
  margin-top: 24px;
}

.orphanage-details .orphanage-details-content .map-container {
  margin-top: 64px;
  background: #E6F7FB;
  border: 1px solid #B3DAE2;
  border-radius: 20px;
}

.orphanage-details .orphanage-details-content .map-container footer {
  padding: 20px 0;
  text-align: center;
}

.orphanage-details .orphanage-details-content .map-container footer a {
  line-height: 24px;
  color: #0089A5;
  text-decoration: none;
}

.orphanage-details .orphanage-details-content .map-container .leaflet-container {
  border-bottom: 1px solid #DDE3F0;
  border-radius: 20px;
}

.orphanage-details .orphanage-details-content hr {
  width: 100%;
  height: 1px;
  border: 0;
  background: #D3E2E6;
  margin: 64px 0;
}

.orphanage-details .orphanage-details-content h2 {
  font-size: 36px;
  line-height: 46px;
  color: #4D6F80;
}

.orphanage-details .orphanage-details-content .open-details {
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.orphanage-details .orphanage-details-content .open-details div {
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;
}

.orphanage-details .orphanage-details-content .open-details div svg {
  display: block;
  margin-bottom: 20px;
}

.orphanage-details .orphanage-details-content .open-details div.hour {
  background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
  border: 1px solid #B3DAE2;
  color: #5C8599;
}

.orphanage-details .orphanage-details-content .open-details div.open-on-weekends {
  background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
  border: 1px solid #A1E9C5;
  color: #37C77F;
}

.orphanage-details .orphanage-details-content .open-details div.open-on-weekends.dont-open {
  background: linear-gradient(154.16deg, #FDF0F5 7.85%, #FFFFFF 91.03%);
  border: 1px solid #FFBCD4;
  color: #FF669D;
}

.orphanage-details .orphanage-details-content button.contact-button {
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
}

.orphanage-details .orphanage-details-content button.contact-button svg {
  margin-right: 16px;
}

.orphanage-details .orphanage-details-content button.contact-button:hover {
  background: #36CF82;
}

`;
