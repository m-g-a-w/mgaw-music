import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background-position: -260px 100px;

  .album-image {
    width: 100px;
    height: 100px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: 90%;
    margin-top: 5px;

    .name {
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .artist {
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
