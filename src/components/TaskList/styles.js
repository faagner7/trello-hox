export default theme => ({
  root: {
    marginTop: 30
  },
  list: {
    width: 350,
    backgroundColor: theme.palette.background.default,
    borderRadius: "0.2px"
  },
  card: {
    width: 350,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#929191"
  },
  input: {
    width: 350,
    backgroundColor: theme.palette.background.default
  },
  button: {
    width: 350,
    color: "#FFF"
  },
  title: {
    marginLeft: theme.spacing(2),
    color: "#FFF",
    fontWeight: 200,
    letterSpacing: 3
  },
  addTask: {
    color: "#FFF",
    letterSpacing: 3
  }
});
