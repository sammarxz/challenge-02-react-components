import { Button } from './Button';

import { GenreResponseProps } from "../@types/GenreResponseProps";

import '../styles/sidebar.scss';

type SideBarProps = {
  genres: GenreResponseProps[],
  handleClickButton(id:number): void,
  selectedGenreId: number
}

export function SideBar({ genres, selectedGenreId, handleClickButton }:SideBarProps) {
  function onClickButton(id:number) {
    handleClickButton(id)
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}