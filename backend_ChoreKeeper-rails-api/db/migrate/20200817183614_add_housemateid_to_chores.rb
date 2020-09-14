class AddHousemateidToChores < ActiveRecord::Migration[6.0]
  def change
    add_column :chores, :housemate_id, :integer
  end
end
