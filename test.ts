
const randomColor = (): string => {
    const randomColor: number = Math.floor(Math.random() * 16777215);
    const colorString: string = "#" + randomColor.toString(16);
    return colorString;
  };

  console.log(randomColor())