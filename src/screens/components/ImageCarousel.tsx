import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface ImageCarouselProps {
  onIndexChange: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ onIndexChange }) => {
  const images = [
    require('../../assets/Img/img1.png'),
    require('../../assets/Img/img2.png'),
    require('../../assets/Img/img3.png'),
    require('../../assets/Img/img4.png'),
    require('../../assets/Img/img5.png'),
    require('../../assets/Img/img6.png'),
    require('../../assets/Img/img7.png'),
    require('../../assets/Img/img8.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        onIndexChange(nextIndex); 
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, onIndexChange]);

  return (
    <View style={styles.carouselContainer}>
      <Image
        source={images[currentIndex]}
        style={styles.carouselImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 2,
    width: '100%',
    position: 'relative', 
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageCarousel;