import classes from './MealsSummary.module.css';

const MealSummary = () => {
    return (
    <section className={classes.summary}>
        <h2> Delicious food , Delivered to you</h2>
        <p>choose your favourite meal from our board selection of available meals and enjoy a delicious lunch or dinner at home</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
    </section>
    );
};

export default MealSummary;