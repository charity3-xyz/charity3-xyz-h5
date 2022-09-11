import React, { useState } from 'react';
import { observer } from 'mobx-react';
import {
  Unstable_Grid2 as Grid,
  Box,
  Paper,
  Button,
  IconButton,
  IconButtonProps,
  Avatar,
  CardHeader,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Collapse,
  Container,
  Pagination,
  Stack,
  LinearProgress,
  List,
  Dialog,
  DialogTitle,
  ImageList,
  ImageListItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import style from './index.module.scss';

const chunk = 20 * 1024;
let imgArrayData = [
  {
    index: 1,
    imgArray: [],
  },
];

export const Upload = observer(function Upload() {
  const [imagePreview, setImagePreview] = useState('');
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState([
    {
      url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      index: 1,
      type: 1, // 1:succes
      progress: 100,
    },
  ]);
  // 图片索引
  const [maxIndex, setMaxIndex] = useState(1);

  // 图片上传
  const handleUpload = (e: any) => {
    const files = e.target.files;
    let query = {};
    if (files.length) {
      let imgIndexTmp = maxIndex;
      for (let j = 0; j < files.length; j++) {
        const file = files[j];
        imgIndexTmp = maxIndex + j + 1;
        imgArrayData.push({
          index: imgIndexTmp,
          imgArray: [],
        });
        let start = 0;
        let chunks = [];
        for (let i = 0; i < Math.ceil(file.size / chunk); i++) {
          const end = start + chunk;
          chunks[i] = file.slice(start, end);
          start = end;
        }

        query = {
          fileSize: file.size,
          dataSize: chunk,
          offset: 0,
          index: imgIndexTmp,
        };

        upload(chunks, query, successPerUpload);
      }
      setMaxIndex(imgIndexTmp);
    }
  };

  // 开始上传
  const upload = (chunks: any, query: any, cb: any) => {
    let index = Math.floor(query.offset / query.dataSize);
    getFileBinary(chunks[index], (binary: { byteLength: any }) => {
      const offset = query.offset || 0;
      const newOffset = offset + binary.byteLength;
      const resp = {
        isFinish: query.fileSize <= newOffset,
        offset: newOffset,
      };

      if (typeof cb === 'function') {
        cb(resp, chunks, query, binary);
      }
    });
  };

  // 分片读取文件
  const getFileBinary = (file: any, cb: any) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      if (typeof cb === 'function') {
        cb.call(this, this.result);
      }
    };
  };

  // 分片上传成功。
  const successPerUpload = (resp: any, chunks: any, query: any, binary: any) => {
    const arr = new Uint8Array(binary);

    const imgArray: any = imgArrayData.filter(item => item.index === query.index)[0].imgArray;
    imgArray.push(arr);
    if (resp.isFinish === true) {
      query.offset = query.fileSize;
      // imgArray = mergeArrayBuffer(imgArray, arr);
    } else {
      // imgArray = mergeArrayBuffer(imgArray, arr);
      // imgArray2.push(arr);
      // setImg();
      //未上传完毕
      query.offset = resp.offset;

      setTimeout(() => {
        upload(chunks, query, successPerUpload);
      }, 2000);
    }
    setImg(imgArray, query);
  };

  // 设置正在上传的图片地址
  const setImg = (array: any, option: any) => {
    var blob = new Blob(array);
    const url = window.URL.createObjectURL(blob);
    setItemData(pre => {
      const imgArray: any = pre.filter(item => item.index === option.index)[0];
      if (imgArray) {
        pre.map(item => {
          if (item.index === option.index) {
            item.url = url;
            item.progress = parseInt(((option.offset / option.fileSize) * 100).toFixed(0), 10);
          }
          return item;
        });
        return [...pre];
      }

      return [
        ...pre,
        {
          url,
          index: option.index,
          type: 2,
          progress: parseInt(((option.offset / option.fileSize) * 100).toFixed(0), 10),
        },
      ];
    });
  };

  // 删除图片
  const handleDelete = (item: any) => {
    setItemData(pre => {
      const index: any = pre.findIndex(item2 => item2.index === item.index);
      pre.splice(index, 1);
      return [...pre];
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 上传图片遮罩区域
  const ImageListItemWrap = (item: any) => {
    if (item.progress !== 100 && item.type === 2) {
      return (
        <Box className={style.uploadLoading} component="span">
          {item.progress}%
        </Box>
      );
    } else if (item.type === 3) {
      return (
        <Box className={style.uploadError} component="span">
          <BrokenImageIcon /> 重新上传 {item.progress}
        </Box>
      );
    }

    return (
      <Box className={style.uploadDelete} component="span">
        <IconButton
          sx={{ color: '#fff' }}
          size="small"
          onClick={(e: any) => {
            if (e.stopPropagation) {
              e.stopPropagation();
            }
            if (e.preventDefault) {
              e.preventDefault();
            }
            handleDelete(item);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    );
  };

  // 上传图片展示区域
  const ImageWrap = (item: any) => {
    if (item.progress === 0) {
      return <></>;
    }

    return (
      <img
        className={style.uploadPreviewImage}
        // src={item.url}
        src={item.type === 1 ? `${item.url}?w=164&h=164&fit=crop&auto=format` : item.url}
        loading="lazy"
        onClick={() => {
          setOpen(true);
          setImagePreview(item.url);
        }}
      />
    );
  };

  const ImagePreviewWrap = () => {
    return (
      <Dialog onClose={handleClose} open={open}>
        <img src={imagePreview} />
      </Dialog>
    );
  };

  return (
    <Box className={style.upload}>
      <div id="preview" />
      <ImageList className={style.uploadPreviewList} cols={10}>
        <ImageListItem className={style.uploadPreviewListItem} key="add">
          <Button className={style.uploadBtn} variant="contained" component="label">
            <AddIcon />
            支持png、jpg
            <input hidden accept="image/*" multiple type="file" onChange={handleUpload} />
          </Button>
        </ImageListItem>
        {itemData.map(item => (
          <ImageListItem className={style.uploadPreviewListItem} key={item.url}>
            {ImageWrap(item)}
            {ImageListItemWrap(item)}
          </ImageListItem>
        ))}
      </ImageList>
      <ImagePreviewWrap />
    </Box>
  );
});
