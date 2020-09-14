class AddDayToChores < ActiveRecord::Migration[6.0]
  def change
    add_column :chores, :day, :text
  end
end
