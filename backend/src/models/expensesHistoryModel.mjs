import { connection } from "../config/db.mjs";



function getExpensesHistoryModel(data, callback) {
    const query = `
      SELECT 
        eh.*, -- All columns from expenses_history
        s.quantity_in,
        s.quantity_out,
        s.total_worth_stockin,
        s.total_worth_stockout,
        s.stockIn_flow,
        s.stockOut_flow,
        s.comments_in,
        s.comments_out,
        s.stock_status,
        s.date_stockIn,
        s.date_stockOut,
        i.image_item, -- Columns from item
        i.title
      FROM 
        expenses_history eh
      JOIN 
        stock s ON eh.stock_id = s.stock_id -- Join stock table
      JOIN 
        item i ON eh.item_id = i.item_id; -- Join item table
    `;
    connection.query(query, data, callback);
  }
  






export{getExpensesHistoryModel};