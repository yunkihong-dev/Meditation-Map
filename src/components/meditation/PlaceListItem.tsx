import { Link } from "react-router-dom";
import styled from "styled-components";
import type { MeditationPlace } from "@/services/meditation/types";

const Card = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background: ${({ theme }) => theme.colors.white};
  padding: 18px;
  border-radius: ${({ theme }) => theme.radii.lg};
  text-decoration: none;
  color: inherit;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  animation: fadeUp 0.5s ease both;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(83, 45, 138, 0.22);
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Body = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Meta = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Thumbnail = styled.div`
  img {
    width: 160px;
    height: 120px;
    object-fit: cover;
    border-radius: 12px;

    @media (max-width: 960px) {
      width: 100%;
      height: 180px;
    }
  }
`;

interface PlaceListItemProps {
  place: MeditationPlace;
}

const PlaceListItem = ({ place }: PlaceListItemProps) => {
  return (
    <Card to={`/meditation/place/${place.id}`}>
      <Body>
        <h3>{place.name}</h3>
        <Description>{place.shortDescription}</Description>
        <Meta>
          <span>{place.address}</span>
          <span>{place.duration}</span>
          {place.hasTempleStay && <span>템플스테이</span>}
        </Meta>
        <Tags>
          {place.hashtags.slice(0, 4).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </Tags>
      </Body>
      <Thumbnail>
        <img src={place.thumbnailUrl} alt={`${place.name} 썸네일`} />
      </Thumbnail>
    </Card>
  );
};

export default PlaceListItem;
