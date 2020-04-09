const TrianglifyConfig = {
  cell_size: 15,
  variance: 1,
  x_colors: 'random',
  y_colors: 'match_x',
  color_space: 'lab',
  color_function: false,
  stroke_width: 30,
  width: 1920,
  height: 1080,
  seed: null
};

const trianglify = Trianglify({
  ...TrianglifyConfig
})

document.body.appendChild(trianglify.canvas());
