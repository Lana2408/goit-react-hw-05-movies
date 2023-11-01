import noImage from 'images/No-Image.svg.png';
import {
  StyledCastList,
  StyledImg,
  StyledCastDescr,
  StyledCastName,
  StyledCastRole,
} from './CastPage.styled';

export const CastList = ({ cast }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
  return (
    <StyledCastList>
      {cast.length > 0
        ? cast.map(({ profile_path, original_name, character, id }) => (
            <li key={id}>
              <StyledImg
                src={profile_path ? IMAGE_BASE_URL + profile_path : noImage}
                alt={original_name}
                width="200px"
                height="300px"
                loading="lazy"
              />
              <StyledCastDescr>
                <StyledCastName>{original_name}</StyledCastName>
                <StyledCastRole>
                  <b>Character:</b> {character}
                </StyledCastRole>
              </StyledCastDescr>
            </li>
          ))
        : 'Unfortunately, there are no actors for this movie.'}
    </StyledCastList>
  );
};
